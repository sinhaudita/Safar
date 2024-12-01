document.addEventListener("DOMContentLoaded", () => {
    const carDetailsDiv = document.getElementById("car-details");
    const billingDetailsDiv = document.getElementById("billing-details");

    // Retrieve billing details from localStorage
    const billingDetails = JSON.parse(localStorage.getItem("billingDetails"));

    if (billingDetails) {
        // Populate car details
        carDetailsDiv.innerHTML = `
            <span>Car Model:</span> ${billingDetails.carModel}
        `;

        // Populate billing details
        billingDetailsDiv.innerHTML = `
            <span>Base Price:</span> ₹${billingDetails.basePrice}<br>
            <span>Total Fare:</span> ₹${billingDetails.totalFare}
        `;
    } else {
        // Show error if no data is available
        carDetailsDiv.innerHTML = "No billing details available.";
    }
});
