chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    captureAndStoreScreenshot(tabId);
  }
});

chrome.tabs.onActivated.addListener((activeInfo) => {
  captureAndStoreScreenshot(activeInfo.tabId);
});

function captureAndStoreScreenshot(tabId) {
  chrome.tabs.captureVisibleTab(null, { format: "png" }, (dataUrl) => {
    if (dataUrl) {
      storeScreenshot(dataUrl);
    }
  });
}

function storeScreenshot(dataUrl) {
  chrome.storage.local.get({ screenshots: [] }, (result) => {
    let screenshots = result.screenshots;
    const maxScreenshots = 10;

    if (screenshots.length >= maxScreenshots) {
      screenshots.shift(); // Remove the oldest screenshot (FIFO)
    }

    screenshots.push(dataUrl);
    chrome.storage.local.set({ screenshots });
  });
}
