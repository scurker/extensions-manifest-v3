window.addEventListener('DOMContentLoaded', () => {
  const textarea = document.querySelector('textarea');
  document.querySelector('button').addEventListener('click', () => {
    const { value } = textarea;
    const iframe = document.getElementById('sandbox');

    iframe.contentWindow.postMessage({
      value
    }, '*');
  });
});

window.addEventListener('message', ({ data }) => {
  if (data.result) {
    alert(data.result);
  }
});