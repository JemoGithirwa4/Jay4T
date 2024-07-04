document.getElementById("paymentForm").addEventListener("submit", function(event) {
    var phoneNumberInput = document.getElementById("phone_number").value;
    var phoneNumberPattern = /^\d{10}$/;
    event.preventDefault(); 

    if (!phoneNumberPattern.test(phoneNumberInput)) {
        alert("Please enter a valid 10-digit phone number.");
        event.preventDefault(); 
    } else {
        window.location.href = "success-mpesa.html";
    }
});