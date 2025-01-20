document.addEventListener("DOMContentLoaded", () => {
  const screenshotsDiv = document.getElementById("screenshots");

  chrome.storage.local.get({ screenshots: [] }, (result) => {
    result.screenshots.forEach((dataUrl) => {
      const img = document.createElement("img");
      img.src = dataUrl;
      img.style.cursor = "pointer";
      img.addEventListener("click", () => {
        chrome.tabs.create({ url: dataUrl });
      });
      screenshotsDiv.appendChild(img);
    });
  });
});
