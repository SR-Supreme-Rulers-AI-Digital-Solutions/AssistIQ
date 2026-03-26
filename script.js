function addMessage(text, type) {
  let chatbox = document.getElementById("chatbox");

  let msg = document.createElement("div");
  msg.className = "message " + type;
  msg.innerText = text;

  chatbox.appendChild(msg);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function getAIResponse(input) {
  input = input.toLowerCase();

  if (input.includes("hello") || input.includes("hi")) {
    return "👋 Welcome to AssistIQ! How can I assist you today?";
  }

  if (input.includes("pricing")) {
    return "💰 Our plans start from ₹199/month. Would you like full details?";
  }

  if (input.includes("order")) {
    return "📦 Please provide your order ID to track your order.";
  }

  if (input.includes("contact")) {
    return "📞 Contact us at support@assistiq.com";
  }

  if (input.includes("services")) {
    return "🚀 We build AI chatbots for websites and businesses.";
  }

  if (input.includes("thank")) {
    return "😊 You're welcome! Happy to help.";
  }

  // Smart fallback
  let replies = [
    "That's interesting! Tell me more.",
    "I understand. Can you explain a bit more?",
    "Let me check that for you 🤔",
    "I'm here to help! Please provide more details.",
    "Good question! I'm still learning 😄"
  ];

  return replies[Math.floor(Math.random() * replies.length)];
}

function sendMessage() {
  let input = document.getElementById("userInput").value;

  if (input.trim() === "") return;

  addMessage(input, "user");

  addMessage("Typing...", "bot");

  setTimeout(() => {
    let messages = document.querySelectorAll(".bot");
    messages[messages.length - 1].innerText = getAIResponse(input);
  }, 800);

  document.getElementById("userInput").value = "";
}

function quickMsg(text) {
  document.getElementById("userInput").value = text;
  sendMessage();
}

// Welcome message
window.onload = function() {
  addMessage("👋 Welcome to AssistIQ!\nAI-powered customer support assistant.\nHow can I help you today?", "bot");
};
