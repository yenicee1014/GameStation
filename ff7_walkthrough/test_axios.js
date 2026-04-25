const axios = require('axios');
axios.get('https://gamefaqs.gamespot.com/ps4/168653-final-fantasy-vii-remake/faqs/78459/chapter-1-the-destruction-of-mako-reactor-1', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  }
}).then(res => {
  console.log(res.data.substring(0, 500));
}).catch(err => {
  console.error(err.message);
});