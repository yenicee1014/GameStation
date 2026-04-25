import urllib.request
import re

url = "https://gamefaqs.gamespot.com/ps4/805577-bloodborne/faqs/71399?page=4"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    print("Success, length:", len(html))
except Exception as e:
    print(f"Error: {e}")
