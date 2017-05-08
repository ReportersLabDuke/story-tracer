var gt = require('ground-truth');

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    if (request.currentUrl.indexOf("google.com") >= 0) {
      gt.findSourceReporting('http://thehill.com/homenews/administration/323411-trump-transition-team-was-told-flynn-would-likely-need-to-register-as', 0.5, 15, function(link) {console.log("RESULT: " + link)});  
    }  

});
