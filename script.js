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
  const questions = [
  "Alright, let’s start with the important stuff. What’s the first thing you remember about me?",
  "What’s the weirdest thing you’ve ever done that still haunts you to this day?",
  "Who do you think you are, pretending to be the responsible one in this family? Come on, tell me one of your ‘oops’ moments.",
  "What’s the most embarrassing thing I’ve ever done to you that you still can’t live down?",
  "If you could have any superpower, would it be to make me stop bullying you or is there something even more important?",
  "What’s the one thing you wish you could’ve done without me always tagging along?",
  "Remember when you bit my stomach? What were you even thinking at that moment?",
  "What’s the most ridiculous thing I’ve convinced you to do over the years?",
  "If you could relive one moment from your life, which one would you pick, and why?",
  "On a scale of 1 to 10, how much do you love me, considering the fact that I’m the reason you have all your best memories?",
  "What’s one dream or goal you’re excited to pursue in the next few years?",
  "What’s something you’ve done that made you think, ‘Well, that was a poor life choice’?",
  "If we were in a comedy movie, what would the plot be, and who would be the villain—me, of course?",
  "What’s the most bizarre fashion trend you followed in your life, and can you still pull it off?",
  "What’s one thing I do that secretly annoys you, but you’re too nice to say it out loud?",
  "What’s the best thing you’ve learned from me over the years, and no, ‘how to annoy people’ doesn’t count.",
  "If you could trade places with me for a day, what’s the first thing you’d do, and would you survive my life for 24 hours?",
  " Okay, 18 years together—what’s the most epic sister moment we’ve shared, and can we do it again without embarrassing ourselves too much?"
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


