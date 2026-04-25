const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const TurndownService = require('turndown');
const axios = require('axios');

const URL = 'https://gamefaqs.gamespot.com/ps4/168653-final-fantasy-vii-remake/faqs/78459/chapter-1-the-destruction-of-mako-reactor-1';
const BASE_DOMAIN = 'https://gamefaqs.gamespot.com';
const IMAGES_DIR = path.join(__dirname, 'images');
const OUTPUT_FILE = path.join(__dirname, 'chapter-1.md');

// Ensure images directory exists
if (!fs.existsSync(IMAGES_DIR)) {
    fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

async function downloadImage(url, filepath) {
    try {
        const response = await axios({
            url,
            method: 'GET',
            responseType: 'stream',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });
        return new Promise((resolve, reject) => {
            const writer = fs.createWriteStream(filepath);
            response.data.pipe(writer);
            let error = null;
            writer.on('error', err => {
                error = err;
                writer.close();
                reject(err);
            });
            writer.on('close', () => {
                if (!error) resolve(true);
            });
        });
    } catch (error) {
        console.error(`Failed to download image: ${url}`, error.message);
        return false;
    }
}

async function main() {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    
    // Set a normal user agent
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
    
    console.log(`Navigating to ${URL}...`);
    await page.goto(URL, { waitUntil: 'networkidle2', timeout: 60000 });
    
    // Wait for the main content to load
    await page.waitForSelector('#faqtext, .faqtext, .faqwrap', { timeout: 10000 }).catch(() => console.log('Selector timeout, proceeding anyway.'));
    
    const html = await page.content();
    await browser.close();
    
    console.log('Parsing HTML...');
    const $ = cheerio.load(html);
    
    // Find the main content container
    let contentContainer = $('#faqwrap');
    if (!contentContainer.length) {
        contentContainer = $('#faqtext');
    }
    if (!contentContainer.length) {
        contentContainer = $('.faqtext');
    }
    if (!contentContainer.length) {
        console.log('Could not find #faqwrap or #faqtext, using body as fallback.');
        contentContainer = $('body');
    }
    
    // Extract title for frontmatter
    let pageTitle = $('h1.page-title').text().trim() || 'Chapter 1: The Destruction of Mako Reactor 1';
    
    // Extract images and replace links
    const images = contentContainer.find('img');
    console.log(`Found ${images.length} images.`);
    
    const downloadPromises = [];
    
    images.each((i, el) => {
        let src = $(el).attr('src') || $(el).attr('data-src');
        if (src) {
            // Fix relative URLs
            if (src.startsWith('/')) {
                src = BASE_DOMAIN + src;
            } else if (!src.startsWith('http')) {
                src = BASE_DOMAIN + '/' + src;
            }
            
            // Generate local filename
            const urlObj = new URL(src);
            let filename = path.basename(urlObj.pathname);
            if (!filename || filename === '') {
                filename = `image_${i}.jpg`;
            }
            
            const localFilepath = path.join(IMAGES_DIR, filename);
            const relativePath = `./images/${filename}`;
            
            // Queue download
            downloadPromises.push(downloadImage(src, localFilepath));
            
            // Replace src in HTML
            $(el).attr('src', relativePath);
            // Remove srcset and data-src to prevent issues in markdown conversion
            $(el).removeAttr('srcset');
            $(el).removeAttr('data-src');
        }
    });
    
    console.log('Downloading images...');
    await Promise.all(downloadPromises);
    console.log('Image downloads completed.');
    
    // Convert to Markdown
    console.log('Converting to Markdown...');
    const turndownService = new TurndownService({
        headingStyle: 'atx',
        codeBlockStyle: 'fenced'
    });
    
    const markdownContent = turndownService.turndown(contentContainer.html());
    
    // Add Frontmatter
    const dateStr = new Date().toISOString().split('T')[0];
    const frontmatter = `---
title: "${pageTitle}"
date: ${dateStr}
tags: ["FF7 Remake", "Walkthrough", "Chapter 1"]
---

`;
    
    const finalContent = frontmatter + markdownContent;
    
    fs.writeFileSync(OUTPUT_FILE, finalContent, 'utf8');
    console.log(`Saved to ${OUTPUT_FILE}`);
}

main().catch(err => console.error(err));
