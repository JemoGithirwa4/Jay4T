document.addEventListener("DOMContentLoaded", function(){
    //Get URL parameter
    var urlParams = new URLSearchParams(window.location.search);
    var receivedValue = urlParams.get("value");

    receivedValue = decodeURIComponent(receivedValue);

    //Update to page
    document.getElementById("email2").innerHTML += receivedValue;
});