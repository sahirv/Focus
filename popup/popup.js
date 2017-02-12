document.addEventListener('DOMContentLoaded', function(){
  if (localStorage.focus === 'On') {
    checkbox.checked = true;
    chrome.tabs.executeScript(null,{file: "ContentScripts/on.js"});
  }
  else if (localStorage.focus === 'Off') {
    checkbox.checked = false;
    chrome.tabs.executeScript(null,{file: "ContentScripts/off.js"});
  }
})

var checkbox = document.getElementById('checkbox')

checkbox.addEventListener("change", function(){
  let value = checkbox.checked;
  console.log(value);
  if (value === true){
    localStorage.focus = 'On';
    chrome.tabs.executeScript(null,{file: "ContentScripts/on.js"});
  }
  else {
    localStorage.focus = 'Off';
    chrome.tabs.executeScript(null,{file: "ContentScripts/off.js"});
  }
  setTimeout(function(){
    window.close()
  }, 450);
});
