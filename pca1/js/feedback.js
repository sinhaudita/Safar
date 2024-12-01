
//     // // JavaScript to handle form submission
//     // document.getElementById("feedback").onsubmit = function(event) {
//     //     event.preventDefault(); // Prevent default form submission

//     //     // You can add code to send the form data to the server here.

//     //     // Show success alert message
//     //     alert("Form submitted successfully!");
        
//     //     // Optionally, you can reset the form after submission
//     //     event.target.reset();
//     // };


// // Handle form submission
// document.querySelector("#feedback form").onsubmit = function (event) {
//     event.preventDefault(); // Prevent default form submission behavior

//     // Get user input values
//     const name = document.getElementById("name").value.trim();
//     const rating = document.querySelector("input[name='rating']:checked")?.value;
//     const feedbackText = document.getElementById("experience").value.trim();

//     // Validate the inputs (basic validation)
//     if (!name || !rating || !feedbackText) {
//         alert("Please fill in all fields before submitting!");
//         return;
//     }

//     // Add feedback to the feedback section
//     const feedbackContainer = document.querySelector(".feedback-container");

//     // Create feedback card element
//     const feedbackCard = document.createElement("div");
//     feedbackCard.classList.add("feedback-card");

//     // Name
//     const nameElement = document.createElement("h3");
//     nameElement.textContent = name;

//     // Rating
//     const ratingElement = document.createElement("div");
//     ratingElement.classList.add("rating");
//     for (let i = 1; i <= 5; i++) {
//         const starSpan = document.createElement("span");
//         starSpan.classList.add("material-symbols-outlined");
//         starSpan.textContent = i <= rating ? "star" : "star_border"; // Fill stars based on rating
//         ratingElement.appendChild(starSpan);
//     }

//     // Feedback text
//     const feedbackTextElement = document.createElement("p");
//     feedbackTextElement.classList.add("feedback-text");
//     feedbackTextElement.textContent = `"${feedbackText}"`;

//     // Append elements to feedback card
//     feedbackCard.appendChild(nameElement);
//     feedbackCard.appendChild(ratingElement);
//     feedbackCard.appendChild(feedbackTextElement);

//     // Add feedback card to the feedback container
//     feedbackContainer.appendChild(feedbackCard);

//     // Show success alert
//     alert("Thank you for your feedback!");

//     // Reset the form
//     event.target.reset();
// };
