var GLITCH_URL = "";
function wakeGlitch(){
 var params = {
   'contentType' : 'application/json; charset=utf-8',
   'method' : 'post',
   'muteHttpExceptions': true
 };
 response = UrlFetchApp.fetch(GLITCH_URL, params);
}
