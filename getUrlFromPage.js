pageUrl = window.location.href;

if (pageUrl.indexOf("google.com") >= 0) {
  chrome.runtime.sendMessage({currentUrl: pageUrl}, function(response) {
      console.log("response recieved");
  });
}
