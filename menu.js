if (typeof msBrowser !== 'undefined') {
 chrome = msBrowser;
}
else if (typeof browser != 'undefined')
{
 chrome = browser;
}
$(document).ready(function() {
    var storage = chrome.storage.local;
    storage.get(null, function(output){
        if(output["enabled"] == undefined || output["enabled"] == null || output["enabled"] == "true"){
            storage.set({"enabled": "true"});
            $("#toggle").addClass("on");
            $("#toggle span").text('Enabled (click to disable)');
        }else{
            $("#toggle").addClass("off");
            $("#toggle span").text('Disabled (click to enable)');
        }
    });
	$("#toggle").click(function() {
        storage.get(null, function(output){
            if(output["enabled"] == "true"){
                storage.set({"enabled": "false"});
                $("#toggle span").text('Disabled (click to enable)');
            }else{
                storage.set({"enabled": "true"});
                $("#toggle span").text('Enabled (click to disable)');
            }
            $("#toggle").toggleClass("on");
            $("#toggle").toggleClass("off");
        });
	});
	$("#play").click(function() {
		chrome.tabs.create({url: "http://www.slither-io.com/slitherio"});
	});
    $("#visit").click(function() {
		chrome.tabs.create({url: "https://chrome.google.com/webstore/detail/slitherio-mods-zoom-unloc/eogeabecipmckmihpmkgjbghbffcebcf/reviews"});
	});
    $("#forum").click(function() {
		chrome.tabs.create({url: "http://www.slither-io.com/guides"});
	});    
});