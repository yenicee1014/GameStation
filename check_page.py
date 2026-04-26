from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.on("console", lambda msg: print(f"Console: {msg.text}"))
    page.on("pageerror", lambda err: print(f"Page Error: {err.message}"))
    try:
        page.goto('http://localhost:5173/uncharted-4-walkthrough', wait_until='networkidle')
    except Exception as e:
        print(f"Error navigating: {e}")
    browser.close()
