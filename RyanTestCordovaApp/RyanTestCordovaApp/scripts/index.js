// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();

function get(urlExtension, functionName, querryType) {

    $.ajax({
        url: 'http://localhost:3000/' + urlExtension,
        data: {
            format: 'json'
        },
        error: function (e) {

            console.log("AN AJAX ERROR HAS OCCURED: " + JSON.stringify(e));
        },
        dataType: 'json',
        success: function (data) {

            console.log("Data Loaded: " + data);

            functionName(data);
        },
        type: querryType
    });
}

function loadPostData(data) {

    var str = "";

    for (var i = 0; i < data.length ; i++) {
        str += "<p>";
        str += data[i].text 
        str += "</p>";
    }

    $("#post_list").html("");
    $("#post_list").append(str);
}

function post() {
    var r = confirm("Post this Post?");
    if (r == true) {

        $.ajax({
            url: 'http://localhost:3000/postPost/',
            data: {
                post_text: $('#post_input')[0].value 
            },
            error: function (e) {

                console.log("AN AJAX ERROR HAS OCCURED: " + JSON.stringify(e));
                //window.alert("Sorry, there was a problem removing this study");

            },
            dataType: 'json',
            success: function (data) {

                console.log("Data Loaded: " + data);
                //window.alert("This Study has been Removed");

            },
            type: 'POST'
        });

        window.alert("Your Post Has Been Posted!");
        //location.replace("#/studyoptionspage");

    } 
}