var gt = require('ground-truth');

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      gt.findSourceReporting(request.currentUrl, 0.3, 15, function(result, path) {console.log("RESULT: " + JSON.stringify(path))});  
});
