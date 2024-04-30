document.addEventListener("DOMContentLoaded", function() {
  // Index Page (Join Room Button)
  const joinBtn = document.getElementById("join-btn");
  if (joinBtn) {
    joinBtn.addEventListener("click", function() {
      window.location.href = "login.html"; // Change to the login page
    });
  }

  // Login Page
  const signUpBtn = document.getElementById("signup-btn");
  if (signUpBtn) {
    signUpBtn.addEventListener("click", function() {
      window.location.href = "signup.html"; // Change to the sign-up page
    });
  }

  const guestBtn = document.querySelector(".guest");
  if (guestBtn) {
    guestBtn.addEventListener("click", function() {
      // Handle guest login functionality if needed
      // For example, redirecting to a guest page or performing a guest login
      console.log("Guest login clicked");
    });
  }

  // Sign Up Page
  const loginBtnSignUp = document.getElementById("login-btn");
  if (loginBtnSignUp) {
    loginBtnSignUp.addEventListener("click", function() {
      window.location.href = "login.html"; // Change to the login page
    });
  }
});

//Transition to interface
document.addEventListener("DOMContentLoaded", function() {
  // Guest Button
  const guestBtn = document.querySelector(".guest");
  if (guestBtn) {
    guestBtn.addEventListener("click", function() {
      window.location.href = "interface.html"; // Redirect to interface.html
    });
  }

  // Login Button
  const loginBtn = document.getElementById("login-btn");
  if (loginBtn) {
    loginBtn.addEventListener("click", function() {
      window.location.href = "interface.html"; // Redirect to interface.html
    });
  }
});


// Transition from VC1 > VC2
var originalIconRoomsColor = '#8ec5fc';
var originalIconFilesColor = '#8ec5fc';

// Get the icon-rooms element
var iconRooms = document.querySelector('.icon-rooms');

// Add a click event listener to the icon
iconRooms.addEventListener('click', function() {
    // Reset icon-files color to original
    document.querySelector('.icon-files').style.color = originalIconFilesColor;

    // Change the color of the icon
    iconRooms.style.color = '#e0c3fc';

    // Apply a transition effect to the second vertical container
    var verticalContainer2 = document.getElementById('vertical-container-2');
    verticalContainer2.style.transition = 'all 0.5s ease-in-out';
    verticalContainer2.style.transform = 'translateX(100%)'; // Change the transform value as needed
});

// Get the icon-files element
var iconFiles = document.querySelector('.icon-files');

// Add a click event listener to the icon
iconFiles.addEventListener('click', function() {
    // Reset icon-rooms color to original
    document.querySelector('.icon-rooms').style.color = originalIconRoomsColor;

    // Change the color of the icon
    iconFiles.style.color = '#e0c3fc';
  
    // Hide the content of the second vertical container
    var verticalContainer2 = document.getElementById('vertical-container-2');
    verticalContainer2.innerHTML = ''; // Remove all content
});


//Message Bar
document.addEventListener("DOMContentLoaded", function() {
  const messageForm = document.getElementById("message-form");
  const messageInput = document.getElementById("message-input");
  const messageDisplay = document.getElementById("message-display");

  // Event listener for form submission
  messageForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent default form submission behavior
      
      const text = messageInput.value.trim();
      if (text === "") {
          return; // Do nothing if the input is empty
      }

      // Send the message to the server
      sendMessage(text);
      
      // Clear the input field
      messageInput.value = "";
  });

  // Function to send message to the server
  // Function to send message to the server and display it
function sendMessage(text) {
  fetch("/messages", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: text, sender: "User" })
  })
  .then(response => {
      if (!response.ok) {
          throw new Error("Failed to send message");
      }
      return response.json();
  })
  .then(data => {
      // Message sent successfully, display it
      displayMessage(data);
  })
  .catch(error => {
      console.error("Error sending message:", error);
  });
}

  // Function to display received messages
  function displayMessage(message) {
      const messageElement = document.createElement("div");
      messageElement.textContent = `${message.sender}: ${message.text}`;
      messageDisplay.appendChild(messageElement);
  }

  // Function to retrieve messages from the server and display them
  function retrieveMessages() {
      fetch("/messages")
      .then(response => {
          if (!response.ok) {
              throw new Error("Failed to retrieve messages");
          }
          return response.json();
      })
      .then(messages => {
          // Display each message
          messages.forEach(message => {
              displayMessage(message);
          });
      })
      .catch(error => {
          console.error("Error retrieving messages:", error);
      });
  }

  // Retrieve messages when the page loads
  retrieveMessages();
});

// Function to display a message on the message display area
function displayMessage(message) {
  console.log("Received message:", message);
  const messageElement = document.createElement("div");
  messageElement.textContent = `${message.sender}: ${message.text}`;
  document.getElementById("message-display").appendChild(messageElement);
}

