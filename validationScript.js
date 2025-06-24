// JavaScript code for form validation
document.addEventListener("DOMContentLoaded", function() {
   // Prevent form from submitting
   let form = document.getElementById("myForm");
   
   // Retrieve the input field value
   let input = document.getElementById("inputField");
   
   // Regular expression pattern for alphanumeric input
   let regex = /^[a-zA-Z0-9]*$/
   
   let message = document.createElement("p");
   message.style.marginTop = "10px";
   form.appendChild(message);


   form.addEventListener("submit", function(event) {
      // Check if the input value matches the pattern
      let value = input.value;

      // Check if the input value matches the pattern
      if (regex.test(value)) {
         // Valid input: display confirmation and submit the form
         message.textContent = "Valid Input."
         message.style.color = "green";
      } else {
         // Invalid input: display error message
         message.textContent = "Please enter only numbers and letters.";
         message.style.color = "red";

         event.preventDefault();
      }
      event.preventDefault();
   });  
});


      
