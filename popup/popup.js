var checkbox = document.getElementById('checkbox')
checkbox.addEventListener("change", function(){
  let value = checkbox.checked;
  if (value === true){
    chrome.tabs.executeScript(null,{file: "on.js"});
  }
  else {
    chrome.tabs.executeScript(null,{file: "off.js"});
  }
});
