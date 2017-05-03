var gt = require('ground-truth');

var currentUrl = window.location.href;
console.log(currentUrl);

if (currentUrl.indexOf("google.com") >= 0) {
  gt.findSourceReporting('http://thehill.com/homenews/administration/323411-trump-transition-team-was-told-flynn-would-likely-need-to-register-as', 0.5, 15, function(link) {console.log("RESULT: " + link)});  
}
