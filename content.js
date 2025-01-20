if (typeof chrome !== "undefined" && chrome.runtime) {
  window.addEventListener("beforeunload", () => {
    try {
      chrome.runtime.sendMessage({ action: "capture" });
    } catch (error) {
      console.error("Failed to send message: ", error);
    }
  });
}
