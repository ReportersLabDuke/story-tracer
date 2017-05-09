pageUrl = window.location.href;


chrome.runtime.sendMessage({currentUrl: pageUrl}, function(response) {
  if (response[0].score > 0.3) {
    document.body.innerHTML += '<dialog>' + "This page may be based on content from: " + "<a href='response[0].source'>" + response[0].source + "</a>" + '<br><button>Close</button></dialog>';
    var dialog = document.querySelector("dialog");
    dialog.querySelector("button").addEventListener("click", function() {
      dialog.close();
    });
    dialog.style = "position: fixed; width: 400px; height: auto; border: 1px solid rgb(51, 102, 153); padding: 10px; background-color: rgb(255, 255, 255); z-index: 2001; overflow: hidden; text-align: center; top: 25px; left: calc(100% - 425px);";
    dialog.show();
  }  
  console.log("RESULT RESPONSE: " + JSON.stringify(response));
});

