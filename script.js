
var contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault(); 

  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var messageInput = document.getElementById("message");

  var name = nameInput.value;
  var email = emailInput.value;
  var message = messageInput.value;

  // Validate the form input
  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields");
    return;
  }

  // Clear the form inputs
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";

  // Show a success message
  alert("Message sent successfully!");
});