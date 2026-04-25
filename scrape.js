import fs from 'fs';
import path from 'path';
import axios from 'axios';
import * as cheerio from 'cheerio';
import TurndownService from 'turndown';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const URL_TO_SCRAPE = 'https://gamefaqs.gamespot.com/ps4/168653-final-fantasy-vii-remake/faqs/78459/chapter-1-the-destruction-of-mako-reactor-1';

async function run() {
  const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced'
  });

  const outDir = path.join(__dirname, 'ff7_walkthrough');
  const imgDir = path.join(outDir, 'images');

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  if (!fs.existsSync(imgDir)) {
    fs.mkdirSync(imgDir, { recursive: true });
  }

  console.log('Fetching URL:', URL_TO_SCRAPE);
  const response = await axios.get(URL_TO_SCRAPE, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
    }
  });

  const html = response.data;
  const $ = cheerio.load(html);

  // According to the task, we should extract main content, e.g., .faqtext
  let contentNode = $('.faqtext');
  
  if (contentNode.length === 0) {
    // Fallback selectors
    contentNode = $('#faqwrap');
    if (contentNode.length === 0) {
      console.error('Could not find content node (.faqtext or #faqwrap)');
      return;
    }
  }

  // Find images
  const images = contentNode.find('img');
  console.log(`Found ${images.length} images.`);

  for (let i = 0; i < images.length; i++) {
    const img = $(images[i]);
    let src = img.attr('src');
    if (!src) continue;

    // GameFAQs images often use data-src for lazy loading
    const dataSrc = img.attr('data-src');
    if (dataSrc) {
      src = dataSrc;
    }

    if (src.startsWith('//')) {
      src = 'https:' + src;
    } else if (src.startsWith('/')) {
      const baseUrl = new URL(URL_TO_SCRAPE).origin;
      src = baseUrl + src;
    }

    try {
      const parsedUrl = new URL(src);
      const filename = path.basename(parsedUrl.pathname);
      const imgPath = path.join(imgDir, filename);

      console.log(`Downloading image: ${src}`);
      const imgResponse = await axios({
        url: src,
        method: 'GET',
        responseType: 'arraybuffer',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
          'Referer': 'https://gamefaqs.gamespot.com/'
        }
      });

      fs.writeFileSync(imgPath, imgResponse.data);
      
      // Replace URL with relative path
      img.attr('src', `./images/${filename}`);
      // Remove data-src if exists so it doesn't mess up turndown
      img.removeAttr('data-src');
    } catch (e) {
      console.error(`Failed to download ${src}: ${e.message}`);
    }
  }

  // Convert HTML to Markdown
  let markdown = turndownService.turndown(contentNode.html() || '');

  // Add frontmatter
  const title = $('title').text().trim() || 'Chapter 1: The Destruction of Mako Reactor 1';
  const date = new Date().toISOString().split('T')[0];
  
  const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
date: "${date}"
tags: ["FF7 Remake", "Walkthrough", "Chapter 1"]
source: "${URL_TO_SCRAPE}"
---

`;

  const finalContent = frontmatter + markdown;
  const mdPath = path.join(outDir, 'chapter-1.md');
  
  fs.writeFileSync(mdPath, finalContent, 'utf-8');
  console.log(`Saved Markdown to ${mdPath}`);
}

run().catch(console.error);
