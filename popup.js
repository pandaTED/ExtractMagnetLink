window.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

    chrome.tabs.sendMessage(tabs[0].id, { action: 'getLinks' }, (response) => {
      var showText = document.getElementById('hrefList')
      if (response.result){
        const text = response.result.join("\n") 
        showText.textContent = text
      }
    });

  });
});