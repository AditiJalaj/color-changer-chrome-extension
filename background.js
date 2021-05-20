let color= '#CD5C5C';

chrome.runtime.onInstalled.addListener(()=>{
    chrome.storage.sync.set({color});
    console.log('default background color set to ', `color: ${color}`)
})