document.getElementById("signupform").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Check if there are any existing users in localStorage, or initialize an empty array if not
    let users = localStorage.getItem("users");

    // Parse the users array if it exists, otherwise set it to an empty array
    if (users) {
        users = JSON.parse(users);
    } else {
        users = [];
    }

    // Check if the email already exists in the array
    let userExist = udocument.getElementById("signupform").addEventListener("submit", function(event) {
        event.preventDefault();
    
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
    
        // Check if there are any existing users in localStorage
        let users = localStorage.getItem("users");
    
        // Parse the users array if it exists and is valid, otherwise set it to an empty array
        try {
            users = JSON.parse(users);
            if (!Array.isArray(users)) {
                throw new Error("Stored data is not an array");
            }
        } catch (error) {
            users = []; // Initialize users as an empty array if parsing fails or if data is not valid
        }
    
        // Check if the email already exists in the array
        let userExist = users.some(user => user.email === email);
    
        if (userExist) {
            document.getElementById("message").textContent = "Email already exists!";
            document.getElementById("message").style.color = "red";
        } else {
            // Add the new user to the array
            users.push({ email, password });
    
            // Save the updated users array back to localStorage
            localStorage.setItem("users", JSON.stringify(users));
    
            document.getElementById("message").textContent = "Sign up successful!";
            document.getElementById("message").style.color = "green";
    
            // Clear the form
            document.getElementById("signupform").reset();
        }
    });
    sers.some(user => user.email === email);

    if (userExist) {
        document.getElementById("message").textContent = "Email already exists!";
        document.getElementById("message").style.color = "red";
    } else {
        // Add the new user to the array
        users.push({ email, password });

        // Save the updated users array back to localStorage
        localStorage.setItem("users", JSON.stringify(users));

        document.getElementById("message").textContent = "Sign up successful!";
        document.getElementById("message").style.color = "green";

        // Clear the form
        document.getElementById("signupform").reset();
    }
});
