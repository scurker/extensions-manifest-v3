window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('button').addEventListener('click', () => {
    document.getElementById('response').innerHTML = '';
    chrome.tabs.sendMessage(chrome.devtools.inspectedWindow.tabId, { hello: 'world'});
  });
});

chrome.runtime.onMessage.addListener((request, sender) => {
  const element = document.createElement('p');
  element.innerText = JSON.stringify(request, null, 2);
  document.getElementById('response').appendChild(element);
});