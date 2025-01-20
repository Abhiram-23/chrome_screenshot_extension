# Auto Screenshot Capture - Chrome Extension

## Overview
This Chrome extension captures a screenshot every time the user refreshes, navigates back, or moves forward in a webpage. It stores a fixed number of screenshots (FIFO strategy) and provides a popup to view stored images.

## Features
- Captures screenshots on page refresh, back, and forward navigation.
- Stores up to 10 screenshots, deleting the oldest when full.
- Provides a popup to view stored screenshots.
- Click on a screenshot to open it in a new tab.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repository-name.git
   ```
2. Open **Google Chrome** and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top right).
4. Click **"Load Unpacked"**.
5. Select the cloned project folder.
6. The extension will now be added to Chrome.

## Usage
- Open any webpage.
- Refresh, navigate back, or navigate forward.
- Click on the extension icon to view stored screenshots.
- Click on a screenshot to open it in a new tab.

## Folder Structure
```
/chrome-extension-screenshot
│── manifest.json
│── background.js
│── content.js
│── popup.html
│── popup.js
│── icons/
│   ├── icon.png
```

## Troubleshooting
- **Screenshots not appearing?**
  - Ensure permissions are correct in `manifest.json`.
  - Check the console logs in `chrome://extensions/` under "Inspect views: background page".
- **Permission error?**
  - Remove and reload the extension from `chrome://extensions/`.

## License
This project is licensed under the MIT License.

## Contributing
Feel free to fork the repository and submit pull requests to improve the extension!

---
**Author:** Your Name

