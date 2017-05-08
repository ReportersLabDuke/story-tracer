pageUrl = window.location.href;


chrome.runtime.sendMessage({currentUrl: pageUrl}, function(response) {
    console.log("response recieved");
});

