// Handle Proceed Button Click
document.getElementById('proceed-btn').addEventListener('click', function () {
    // Get values from the form
    const pickupLocation = document.getElementById('pickup-location').value;
    const fromTime = document.getElementById('from-time').value;
    const dropLocation = document.getElementById('drop-location').value;
    const toTime = document.getElementById('to-time').value;

    // Store values in localStorage
    localStorage.setItem('pickupLocation', pickupLocation);
    localStorage.setItem('fromTime', fromTime);
    localStorage.setItem('dropLocation', dropLocation);
    localStorage.setItem('toTime', toTime);

    // Redirect to index.html
    window.location.href = 'index.html';
});
