const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbot = document.querySelector('.chatbot');
const closeChatbot = document.querySelector('.close-chatbot');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const chatMessages = document.querySelector('.chatbot-messages');

// Toggle chatbot visibility
chatbotToggle.addEventListener('click', () => {
    chatbot.style.display = chatbot.style.display === 'flex' ? 'none' : 'flex';
});

// Close chatbot
closeChatbot.addEventListener('click', () => {
    chatbot.style.display = 'none';
});

// Handle user messages
sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
    const userMessage = chatInput.value.trim();
    if (userMessage === '') return;

    addMessage(userMessage, 'user-message');
    chatInput.value = '';

    setTimeout(() => {
        addMessage(getBotResponse(userMessage), 'bot-message');
    }, 500);
}

// Add message to chat
function addMessage(message, className) {
    const messageDiv = document.createElement('div');
    messageDiv.className = className;
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Generate bot response
function getBotResponse(message) {
    if (message.toLowerCase().includes('hello')) return 'Hi there! How can I help you today?';
    if (message.toLowerCase().includes('hey')) return 'Hi there! How can I help you today?';
    if (message.toLowerCase().includes('hii')) return 'Hi there! How can I help you today?';
    if (message.toLowerCase().includes('order')) return 'You can order directly on our website!';
    if (message.toLowerCase().includes('timing')) return 'We are open daily from 10 AM to 10 PM 🕙';
    if (message.toLowerCase().includes('menu')) return 'Our menu includes delicious pizzas 🍕, burgers 🍔, and refreshing drinks 🥤!';
    if (message.toLowerCase().includes('thanks')) return 'You are welcome! Feel free to ask me anything else. 😊';

    return 'Sorry, I didn’t understand that. Can you rephrase?';
}
