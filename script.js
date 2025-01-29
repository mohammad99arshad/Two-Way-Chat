// Function to handle sending a message from the sender
function sendMessageFromSender() {
  const messageInput = document.getElementById('sender-input');
  const message = messageInput.value.trim();
  if (message !== '') {
    addMessage(message, 'sender');
    messageInput.value = '';
  }
}

// Function to handle sending a message from the receiver
function sendMessageFromReceiver() {
  const messageInput = document.getElementById('receiver-input');
  const message = messageInput.value.trim();
  if (message !== '') {
    addMessage(message, 'receiver');
    messageInput.value = '';
  }
}

// Function to add a message to the chat
function addMessage(text, type) {
  const chatMessages = document.getElementById('chat-messages');
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', type);
  messageElement.textContent = text;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Event listeners for both sender and receiver
document.getElementById('send-button-sender').addEventListener('click', sendMessageFromSender);
document.getElementById('sender-input').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    sendMessageFromSender();
  }
});

document.getElementById('send-button-receiver').addEventListener('click', sendMessageFromReceiver);
document.getElementById('receiver-input').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    sendMessageFromReceiver();
  }
});
