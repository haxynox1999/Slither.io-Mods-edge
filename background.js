if (typeof msBrowser !== 'undefined') {
 chrome = msBrowser;
}
else if (typeof browser != 'undefined')
{
 chrome = browser;
}
chrome.runtime.onInstalled.addListener(function() {
    chrome.tabs.create({ url: "http://www.slither-io.com/guides/slither-io-mods.html"});
});