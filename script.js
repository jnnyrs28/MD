function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
    alert("Please fill in all fields.");
    return false;
  }

  var confirmation = confirm("Are you sure you want to submit the form?");
  if (confirmation) {
    alert("Form submitted successfully!");
    return true;
  } else {
    return false;
  }
}