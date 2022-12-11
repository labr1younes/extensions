document.addEventListener('DOMContentLoaded', function() {

  var checkButton = document.getElementById('geturlbtn');

  checkButton.addEventListener('click', function() {
  gettin_tab();

  }, false);

}, false);

function gettin_tab() {

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var tab = tabs[0];

    alert(tab.url);
  });

}
