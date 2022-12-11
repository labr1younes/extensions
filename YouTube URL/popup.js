document.addEventListener('DOMContentLoaded', function() {

  var checkButton = document.getElementById('geturlbtn');

  checkButton.addEventListener('click',  function() {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

      let tab = tabs[0];
      console.log(tab.url);

    });


  }, false);

}, false);
