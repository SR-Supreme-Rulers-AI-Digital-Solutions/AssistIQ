function sendMessage() {
  let input = document.getElementById("userInput").value.trim();
  if(input === "") return;

  let chatbox = document.getElementById("chatbox");
  let response = "";

  // Simple logic
  if (input.toLowerCase().includes("refund")) {
    response = "We offer a 7-day refund policy.";
  } 
  else if (input.toLowerCase().includes("contact")) {
    response = "You can reach us at: support@assistiq.com";
  } 
  else if (input.toLowerCase().includes("hello") || input.toLowerCase().includes("hi")) {
    response = "Hello! How can I assist you today?";
  } 
  else {
    response = "Sorry, I didn't understand that. 🤔";
  }

  // Append user message
  let userMsg = document.createElement("p");
  userMsg.className = "user";
  userMsg.innerHTML = `<b>You:</b> ${input}`;
  chatbox.appendChild(userMsg);

  // Append bot response
  let botMsg = document.createElement("p");
  botMsg.className = "bot";
  botMsg.innerHTML = `<b>Bot:</b> ${response}`;
  chatbox.appendChild(botMsg);

  // Auto-scroll
  chatbox.scrollTop = chatbox.scrollHeight;

  // Clear input
  document.getElementById("userInput").value = "";
}
