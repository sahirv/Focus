//inject content scripts on page load
document.addEventListener('DOMContentLoaded', function(){
  chrome.storage.sync.get('focus', function(item){
    if (item.focus === 'On'){
      checkbox.checked = true;
      chrome.tabs.executeScript(null,{file: "ContentScripts/on.js"});
    }
    else if (item.focus === 'Off') {
      checkbox.checked = false;
      chrome.tabs.executeScript(null,{file: "ContentScripts/off.js"});
    }
  });
});

var checkbox = document.getElementById('checkbox')

checkbox.addEventListener("change", function(){
  let value = checkbox.checked;

  if (value === true){
    chrome.storage.sync.set({'focus': 'On'});
    chrome.tabs.executeScript(null,{file: "ContentScripts/on.js"});
  }
  else {
    chrome.storage.sync.set({focus: 'Off'});
    chrome.tabs.executeScript(null,{file: "ContentScripts/off.js"});
  }
  setTimeout(function(){
    window.close()
  }, 450);
});
