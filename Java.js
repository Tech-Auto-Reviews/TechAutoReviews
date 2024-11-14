const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const chatSection = document.getElementById("chat-section");
const chatIcon = document.getElementById("chat-icon");
const reviewSection = document.getElementById("review-section");

const botReplies = [
    "¿Te gustaría saber más sobre algún vehículo en particular o consultar especificaciones técnicas?",
    "¡Perfecto! ¿Estás buscando información sobre autos nuevos, comparaciones o reseñas de rendimiento?",
    "Entiendo 🤔. Dame un momento para verificar la información más reciente que tengo.",
    "Para autos de conbustión compactos, las opciones populares son el Posche 911S, Nissan GTR R35 y la Lamborghini Urus . ¿Quieres saber más sobre alguno de ellos?",
    "¿Quieres saber sobre otro tema? Puedo ayudarte con características, precios, y detalles de mantenimiento."
];

let messageCount = 0;

function addMessage(text, sender) {
    const message = document.createElement("div");
    message.classList.add("message", sender);
    message.textContent = text;
    chatbox.appendChild(message);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function botReply() {
    if (messageCount < botReplies.length) {
        setTimeout(() => {
            addMessage("Escribiendo...", "bot");
            setTimeout(() => {
                chatbox.removeChild(chatbox.lastChild);
                addMessage(botReplies[messageCount], "bot");
                messageCount++;
            }, 1000);
        }, 500);
    } else {
        setTimeout(() => {
            addMessage("Espero haber sido de ayuda 🚗💨. ¡Gracias por usar TechAutoReviews! ¿Te gustaría dejar una reseña sobre nuestra conversación?");
            showReviewSection();
        }, 1000);
    }
}

sendButton.addEventListener("click", () => {
    const userText = userInput.value.trim();
    if (userText) {
        addMessage(userText, "user");
        userInput.value = "";
        botReply();
    }
});

userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendButton.click();
    }
});

chatIcon.addEventListener("click", () => {
    chatSection.style.display = chatSection.style.display === "none" ? "block" : "none";
});

function showReviewSection() {
    reviewSection.style.display = "block";
}

function leaveReview(stars) {
    alert(`¡Gracias por tu reseña de ${stars} estrella(s)!`);
    reviewSection.style.display = "none";
}
