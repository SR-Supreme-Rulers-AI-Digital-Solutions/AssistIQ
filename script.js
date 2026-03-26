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
    return "💰 Demo: Pricing starts from ₹199/month. Full billing system available in premium version.";
  }

  if (input.includes("order")) {
    return "📦 Demo: Order tracking feature available in full version.";
  }

  if (input.includes("contact")) {
    return "📞 Email: support@assistiq.com\n💼 Want this chatbot? Contact us!";
  }

  if (input.includes("services")) {
    return "🚀 We build AI chatbots for websites, businesses & automation systems.";
  }

  if (input.includes("ai")) {
    return "🤖 This is a demo AI chatbot designed to simulate smart customer support.";
  }

  if (input.includes("thank")) {
    return "😊 You're welcome! Let me know if you need anything else.";
  }

  // Smart fallback
  let replies = [
    "That's interesting! Tell me more.",
    "I understand. This can be customized for your business 💼",
    "Let me think 🤔 (Demo AI response)",
    "Great question! Full AI available in premium version 🔒",
    "I'm here to help! Please provide more details."
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

// 🎤 Voice input
function startVoice() {
  if (!('webkitSpeechRecognition' in window)) {
    alert("Voice input not supported in this browser");
    return;
  }

  let recognition = new webkitSpeechRecognition();
  recognition.lang = "en-IN";
  recognition.start();

  recognition.onstart = function() {
    addMessage("🎤 Listening...", "bot");
  };

  recognition.onresult = function(event) {
    let voiceText = event.results[0][0].transcript;
    document.getElementById("userInput").value = voiceText;
    sendMessage();
  };

  recognition.onerror = function() {
    addMessage("❌ Voice recognition error", "bot");
  };
}

// Welcome message
window.onload = function() {
  addMessage("👋 Welcome to AssistIQ!\nAI-powered customer support demo.\n💡 Ask anything or use buttons below.", "bot");
};
