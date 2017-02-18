//Declarative Content rule
var rule1 = {
  // That fires when on facebook.com ...
  conditions: [
    new chrome.declarativeContent.PageStateMatcher({
      pageUrl: { urlContains: 'www.facebook.com' },
    })
  ],
  // And shows the extension's page action.
  actions: [new chrome.declarativeContent.ShowPageAction()]
};

chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules(
      [rule1]
    );
  });
});

//Inject On.js on page load
chrome.tabs.onUpdated.addListener(function() {
  chrome.tabs.executeScript(null, { file: "ContentScripts/on.js" });
});
