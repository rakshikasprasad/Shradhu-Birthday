// script.js

// Initialize EmailJS
emailjs.init("YOUR_USER_ID");  // Replace with your actual User ID from EmailJS


// Define the start date (April 15, 2025)
const startDate = new Date('2025-04-14');

// Get today's date
//const today = new Date();
const today = new Date('2025-04-15')

// Calculate the number of days since the start date
const timeDiff = today - startDate;
const daysSinceStart = Math.floor(timeDiff / (1000 * 3600 * 24)); // Convert time to days

// List of questions for each day (18 questions)
const questions = [
  "On Day 1, let's start with a fun question: What's one thing you’re looking forward to this year?",
  "Day 2: What's your favorite childhood memory?",
  "Day 3: If you could visit any place in the world, where would it be?",
  "Day 4: What is the best piece of advice you've ever received?",
  "Day 5: What's your dream job or career?",
  "Day 6: If you had a superpower, what would it be and why?",
  "Day 7: What’s the best book you’ve ever read?",
  "Day 8: If you could have dinner with any celebrity, who would it be?",
  "Day 9: What’s your favorite family tradition?",
  "Day 10: What’s a skill you’d love to learn?",
  "Day 11: If you could live in any time period, which one would it be?",
  "Day 12: What’s your favorite movie and why?",
  "Day 13: What’s one of your biggest achievements?",
  "Day 14: What’s the most adventurous thing you’ve done?",
  "Day 15: What are you most grateful for today?",
  "Day 16: Who inspires you the most and why?",
  "Day 17: What’s a place you want to visit in your lifetime?",
  "Day 18: Happy Birthday, Shradhitha! Here's your special surprise message!"
];

// Show the question for the current day
function displayQuestion() {
  if (daysSinceStart >= 0 && daysSinceStart < questions.length) {
    document.getElementById("prompt").innerText = questions[daysSinceStart];
  } else {
    document.getElementById("prompt").innerText = "Your special birthday surprise is ready!";
    // Optionally, you can add a final message or end the experience
  }
}

// Function to move to the next day after the user submits an answer
// Function to move to the next day after the user submits an answer
// function nextDay() {
//   const response = document.getElementById('response').value;
//   if (response) {
//     localStorage.setItem(`day${daysSinceStart + 1}`, response); // Save her response (optional)
//     window.location.href = "wheel.html"; // Redirect to wheel page
//   } else {
//     alert("Please enter a response!");
//   }
// }



// Function to move to the next day after the user submits an answer
function nextDay() {
  const response = document.getElementById('response').value;
  if (response) {
    // Save her response for today in localStorage
    localStorage.setItem(`day${daysSinceStart + 1}`, response);

    // Send the email
    sendEmail(response);

    // Redirect to the next surprise page
    window.location.href = "wheel.html"; // Or any page you want to redirect to after submission
  } else {
    alert("Please enter a response!");
  }
}

// Function to send the email
function sendEmail(response) {
  const templateParams = {
    user_name: "Shradhitha",  // You can customize the name as needed
    day_number: daysSinceStart + 1,  // Day number (e.g., Day 1, Day 2, etc.)
    response: response,  // The response she submitted
  };

  // Send email using EmailJS
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
    .then((response) => {
      console.log("Email sent successfully:", response);
    }, (error) => {
      console.log("Error sending email:", error);
    });
}



// Initialize the countdown question on page load
displayQuestion();


