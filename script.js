function sendMessage() {
  let input = document.getElementById("userInput").value;
  let chatbox = document.getElementById("chatbox");

  let response = "";

  if (input.toLowerCase().includes("refund")) {
    response = "We offer 7-day refund.";
  } 
  else if (input.toLowerCase().includes("contact")) {
    response = "Email: support@assistiq.com";
  } 
  else if (input.toLowerCase().includes("hello")) {
    response = "Hello! How can I help you?";
  } 
  else {
    response = "Sorry, I didn't understand.";
  }

  chatbox.innerHTML += "<p><b>You:</b> " + input + "</p>";
  chatbox.innerHTML += "<p><b>Bot:</b> " + response + "</p>";

  document.getElementById("userInput").value = "";
}
