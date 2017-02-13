var rule1 = {
  // That fires when on facebook.com ...
  conditions: [
    new chrome.declarativeContent.PageStateMatcher({
      pageUrl: { urlContains: 'www.facebook.com' },
    })
  ],
  // And shows the extension's page action.
  actions: [new chrome.declarativeContent.ShowPageAction()]
  //TODO: if focus is set to on, hide posts on page load
};

chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules(
      [rule1]
    );
  });
});

chrome.tabs.onUpdated.addListener(function() {
  chrome.tabs.executeScript(null, { file: "ContentScripts/on.js" });
});
