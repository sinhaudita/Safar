const distanceMap = {
    "kaikhali to airport gate number 1": 1.8,
    "haldiram to howrah junction": 16,
    "park street to eden gardens": 1.6
};

// Function to calculate the distance
function calculateDistance() {
    // Get values from location input fields
    const fromLocation = document.getElementById('from-location').value.trim().toLowerCase();
    const toLocation = document.getElementById('to-location').value.trim().toLowerCase();

    // Extract location names without date-time info
    const fromLocationWithoutTime = fromLocation.split(' (')[0];
    const toLocationWithoutTime = toLocation.split(' (')[0];

    // Format the key for distance lookup
    const key = `${fromLocationWithoutTime} to ${toLocationWithoutTime}`;
    console.log("Formatted Key:", key);

    // Check for a valid key in the distance map
    if (distanceMap[key]) {
        const distance = distanceMap[key];
        document.getElementById('distance').value = distance; // Populate the distance input field

        // Enable the Calculate Fare button
        document.getElementById('calculate-fare-btn').disabled = false;
        console.log("Distance calculated successfully:", distance);
    } else {
        alert("Distance between these locations is not available.");
        document.getElementById('calculate-fare-btn').disabled = true;
    }
}

// Function to calculate the total fare
function calculateFare() {
    console.log("Fare calculation started");

    // Get distance and base fare values
    const distance = parseFloat(document.getElementById('distance').value);
    const baseFare = parseFloat(document.getElementById('base-fare').value) || 500; // Default base fare ₹500
    const distanceRate = 10; // ₹10 per km

    // Calculate fare based on distance
    const distanceFare = distance * distanceRate;

    // Handle discount logic based on coupon code
    const couponCode = document.getElementById('discount').value.trim().toUpperCase();
    let discount = 0;

    if (couponCode === "MYFIRST") {
        discount = 0.2; // 20% discount
    } else if (couponCode === "JOURNEY" && (baseFare + distanceFare) > 999) {
        discount = 0.25; // 25% discount
    } else if (couponCode === "TRIP" && (baseFare + distanceFare) > 1999) {
        discount = 0.3; // 30% discount
    }

    const discountAmount = (baseFare + distanceFare) * discount;
    let totalFare = baseFare + distanceFare - discountAmount;

    console.log(`Base Fare: ₹${baseFare}, Distance Fare: ₹${distanceFare}, Discount: ₹${discountAmount}`);

    // Calculate extra charges for time duration
    const fromLocation = document.getElementById('from-location').value;
    const toLocation = document.getElementById('to-location').value;
    const fromTimeString = fromLocation.match(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/)?.[0];
    const toTimeString = toLocation.match(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/)?.[0];

    if (fromTimeString && toTimeString) {
        const fromTime = new Date(fromTimeString);
        const toTime = new Date(toTimeString);

        const timeDifference = Math.abs(toTime - fromTime) / (1000 * 60 * 60); // Difference in hours
        console.log("Time Difference in Hours:", timeDifference);

        if (timeDifference > 24) {
            const extraCharges = Math.floor(timeDifference / 24) * 100;
            console.log(`Extra charges for time: ₹${extraCharges}`);
            totalFare += extraCharges; // Add extra charges to total fare
        }
    } else {
        alert("Invalid date-time format in the location fields.");
        return; // Stop further calculation if date-time is invalid
    }

    // Store the total fare and display it
    sessionStorage.setItem("totalFare", totalFare.toFixed(2));
    document.getElementById('total-fare').value = totalFare.toFixed(2); // Round to 2 decimal places
    console.log("Total Fare:", totalFare);
}

// Function to handle "Proceed for Payment" action
function proceedForPayment() {
    // Ensure fare is calculated before proceeding
    calculateFare();

    // Redirect to the payment page
    window.location.href = "payment.html";
}

// Attach event listeners to buttons
document.getElementById('calculate-distance-btn').addEventListener('click', calculateDistance);
document.getElementById('calculate-fare-btn').addEventListener('click', calculateFare);
document.getElementById('proceed-payment-btn').addEventListener('click', proceedForPayment);
