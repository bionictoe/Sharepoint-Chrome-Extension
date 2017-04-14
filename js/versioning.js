/*
'use strict';

var hostweburl;
var appweburl;

// Load the required SharePoint libraries.
$(document).ready(function () {
    //Get the URI decoded URLs.
    hostweburl = decodeURIComponent(
    getQueryStringParameter("SPHostUrl"));
    appweburl = decodeURIComponent(
    getQueryStringParameter("SPAppWebUrl"));

    //Assign events to buttons
    $("#enableversioningbutton").click(function (event) {
        enableVersioning();
        event.preventDefault();
    });

    // Resources are in URLs in the form:
    // web_url/_layouts/15/resource
    var scriptbase = hostweburl + "/_layouts/15/";

    // Load the js file and continue to load the page.
    // SP.RequestExecutor.js to make cross-domain requests
    $.getScript(scriptbase + "SP.RequestExecutor.js");
});

// Utilities
// Retrieve a query string value.
// For production purposes you may want to use a library to handle the query string.
function getQueryStringParameter(paramToRetrieve) {
    var params = document.URL.split("?")[1].split("&");
    for (var i = 0; i < params.length; i = i + 1) {
        var singleParam = params[i].split("=");
        if (singleParam[0] == paramToRetrieve) return singleParam[1];
    }
}

// Enable versioning for the list
function enableVersioning() {
    var listnametext = document.getElementById("listnametext").value;
    var executor;

    // Initialize the RequestExecutor with the app web URL.
    executor = new SP.RequestExecutor(appweburl);
    executor.executeAsync({
        url: appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('" + listnametext + "')?@target='" + hostweburl + "'",
        method: "POST",
        body: "{ '__metadata': { 'type': 'SP.List' }, 'EnableVersioning': true}",
        headers: {
            "IF-MATCH": "*",
            "X-HTTP-Method": "MERGE",
            "content-type": "application/json;odata=verbose"
        },
        success: enableVersioningSuccessHandler,
        error: enableVersioningErrorHandler
    });
}

// Success Handler
function enableVersioningSuccessHandler(data) {
    alert("Versioning is enabled successfully for the list.")
}

// Error Handler
function enableVersioningErrorHandler(data, errorCode, errorMessage) {
    alert("Could not enable versioning for the list: " + errorMessage);
}
*/
