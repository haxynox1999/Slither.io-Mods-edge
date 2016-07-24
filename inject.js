if (typeof msBrowser !== 'undefined') {
 chrome = msBrowser;
}
else if (typeof browser != 'undefined')
{
 chrome = browser;
}
var chromeVersion=(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1];
if(chromeVersion > 49){
! function() {
window.addEventListener ("load", myMain, false);
function myMain (evt) {
        chrome.storage.local.get(null, function(output){
                if(output["enabled"] == "true" || output["enabled"] == null || output["enabled"] == undefined){

                        var slitherScript = document.createElement("SCRIPT");
                        var chatVod = document.createElement("SCRIPT");
			            var script = document.createElement("SCRIPT");
			            var skins = document.createElement("SCRIPT");			            
			            script.src = chrome.extension.getURL("jquery.js");
			            document.getElementsByTagName('head')[0].appendChild(script);

			            script.addEventListener("load", function () {
			            	chatVod.src = chrome.extension.getURL("chatvod.js");
			                document.getElementsByTagName('head')[0].appendChild(chatVod);			               		                

			                slitherScript.src = chrome.extension.getURL("main.js");
			                document.getElementsByTagName('head')[0].appendChild(slitherScript);

			                skins.src = chrome.extension.getURL("customskins.js");
			                document.getElementsByTagName('head')[0].appendChild(skins);			               

			            });
			            var socket = document.createElement("SCRIPT");
			            socket.src = chrome.extension.getURL("socket.io.js");
			            document.getElementsByTagName('head')[0].appendChild(socket);
			            var css = document.createElement("LINK");
			            css.href = chrome.extension.getURL("bootstrap.css");
			            css.rel = 'stylesheet';
			            css.type = 'text/css';
			            css.media = 'screen';
			            document.getElementsByTagName('head')[0].appendChild(css);
                }
        });
}
}();
}else{
	window.addEventListener ("load", function(){
		alert('Your Google Chrome is out of date. Extension can be error.\nUpdate your Google Chrome to use full features.\nGuide update: Menu->Help->About Google Chrome');
		chrome.storage.local.get(null, function(output){
            if(output["enabled"] == "true" || output["enabled"] == null || output["enabled"] == undefined){

                    var slitherScript = document.createElement("SCRIPT");
                        var chatVod = document.createElement("SCRIPT");
			            var script = document.createElement("SCRIPT");
			            var skins = document.createElement("SCRIPT");
			            script.src = chrome.extension.getURL("jquery.js");
			            document.getElementsByTagName('head')[0].appendChild(script);

			            script.addEventListener("load", function () {
			            	chatVod.src = chrome.extension.getURL("chatvod.js");
			                document.getElementsByTagName('head')[0].appendChild(chatVod);			               		                

			                slitherScript.src = chrome.extension.getURL("main.js");
			                document.getElementsByTagName('head')[0].appendChild(slitherScript);

			                skins.src = chrome.extension.getURL("customskins.js");
			                document.getElementsByTagName('head')[0].appendChild(skins);

			            });
			            var css = document.createElement("LINK");
			            css.href = chrome.extension.getURL("bootstrap.css");
			            css.rel = 'stylesheet';
			            css.type = 'text/css';
			            css.media = 'screen';
			            document.getElementsByTagName('head')[0].appendChild(css);
            }
    	});
	}, false);	
}