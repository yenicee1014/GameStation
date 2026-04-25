import axios from 'axios';
const URL = 'https://gamefaqs.gamespot.com/ps4/168653-final-fantasy-vii-remake/faqs/78459/chapter-1-the-destruction-of-mako-reactor-1';
axios.get(URL, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
  }
}).then(res => {
  console.log('Success, length:', res.data.length);
}).catch(err => {
  console.error('Error:', err.message);
});
