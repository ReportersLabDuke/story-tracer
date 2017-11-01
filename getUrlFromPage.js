pageUrl = window.location.href;

var excluded_urls = [
  "google.com",
  "youtube.com"
]

if (!checkExcludedUrls(pageUrl, excluded_urls)) {
  chrome.runtime.sendMessage({ currentUrl: pageUrl }, function (response) {
    if (response.result.source.indexOf(pageUrl) === -1 && pageUrl.indexOf(response.result.source) == -1) {
      var n = document.createElement("dialog");
      document.body.appendChild(n);
      var dialog = document.querySelector("dialog")
      dialog.innerHTML += "This page may be based on content from: " + createSourceLink(response.result, "source") + "<br><button id='close'>Close</button><button id='more'>More sources...</button>";
      if (response.path[0].length > 1) {
        var listDiv = "<div class='sourcelist'>" + createLinkList(response.path[0].slice(1), "url") + "</div>";
        dialog.innerHTML += listDiv;
      } else {
        var moreButton = dialog.querySelector("#more");
        moreButton.style.display = "none";
      }
      dialog.querySelector("#close").addEventListener("click", function () {
        dialog.close();
        dialog.parentNode.removeChild(dialog);
      });
      dialog.querySelector("#more").addEventListener("click", function () {
        var moreSources = document.querySelector(".sourcelist");
        if (moreSources.style.height !== "auto") {
          moreSources.style.height = "auto";
          moreSources.style.overflowY = "scroll";
          moreSources.style.maxHeight = "500px";
        } else {
          moreSources.style.height = "";
          moreSources.style.overflowY = "";
          moreSources.style.maxHeight = "";
        }
      });
      dialog.style = "position: fixed; width: 400px; height: auto; border: 1px solid rgb(51, 102, 153); padding: 10px; background-color: rgb(255, 255, 255); z-index: 150000000030; overflow: hidden; text-align: center; top: 25px; left: calc(100% - 425px);";
      dialog.show();
    }
    console.log("RESULT RESPONSE: " + JSON.stringify(response));
  });
}

function createSourceLink (sourceObject, attribute) {
  return "<a href='" + sourceObject[attribute] + "'>" + sourceObject[attribute] + "</a>"; 
}

function createLinkList (linkArray, attribute) {
  var html = "<ul>";
  for (i = 0; i < linkArray.length; i++) {
    html += "<li>";
    html += createSourceLink(linkArray[i], attribute);
    html += "</li>";
  }
  html += "</ul>";
  return html;
}

function checkExcludedUrls(currentUrl, excludedList) {
  for (i = 0; i < excludedList.length; i++) {
    if (currentUrl.indexOf(excludedList[i]) >= 0) {
      return true;
    }
  }

  return false;
}
