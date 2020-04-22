chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  chrome.runtime.sendMessage({
    location: window.location.href,
    frame: window.top !== window.self
  });
});