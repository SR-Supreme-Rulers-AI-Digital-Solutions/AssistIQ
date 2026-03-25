// ====== Keyword Mapping ======
const responses = {
  refund: "We offer a 7-day refund policy.",
  contact: "You can reach us at: support@assistiq.com",
  hello: "Hello! How can I assist you today?",
  hi: "Hello! How can I assist you today?",
  pricing: "Our pricing details are available on the website.",
  support: "Our support team is here 24/7 to assist you."
};

// ====== DOM Elements ======
const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("userInput");
const chatForm = document.getElementById("chatForm");

// ====== Render Message Function ======
function renderMessage(sender, text) {
  const msg = document.createElement("p");
  msg.className = sender;
  msg.textContent = `${sender === "user" ? "You" : "Bot"}: ${text}`;
  chatbox.appendChild(msg);
  chatbox.scrollTop = chatbox.scrollHeight; // Auto-scroll
}

// ====== Send Message Function ======
function sendMessage(e) {
  e.preventDefault(); // Prevent form reload
  let input = userInput.value.trim();
  if (!input) return;

  renderMessage("user", input);
  userInput.value = "";

  // Simulate typing delay
  renderMessage("bot", "Typing... 🤖");
  setTimeout(() => {
    // Remove "Typing..." placeholder
    chatbox.lastChild.remove();

    // Check keywords
    let responseKey = Object.keys(responses).find(key =>
      input.toLowerCase().includes(key)
    );
    let response = responseKey ? responses[responseKey] : "Sorry, I didn't understand that. 🤔";

    renderMessage("bot", response);
  }, 700); // 0.7s delay for realism
}

// ====== Event Listener ======
chatForm.addEventListener("submit", sendMessage);
