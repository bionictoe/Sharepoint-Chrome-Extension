var u;
var root;
var pages;

document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.getSelected(null,function(tab) {
        u = tab.url;
        pages = u.match(/\/Pages\/(.*)/)[0];
        root = u.replace(pages, '');
        console.log("Root: "+ root);
        console.log('Pages: ' + pages);
        document.getElementById("root").innerHTML = root;
        document.getElementById("pages").innerHTML = pages;
    });
    //button handler
    document.getElementById("sp").addEventListener('click', function() {
        /*var spUrl = baseDir + "_layouts/15/user.aspx"
        console.log('Navigating to: '+spUrl);
        chrome.tabs.update({
            url: spUrl
        });*/
    }, false);
}, false);
