function gettin_tab() {

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    let tab = tabs[0];
    let tmpurl = new URL(tab.url);
    console.log(tmpurl);
  });

}

document.addEventListener('DOMContentLoaded', function() {

  var checkButton = document.getElementById('geturlbtn');

  checkButton.addEventListener('click', function() {
  gettin_tab();

  }, false);

}, false);
