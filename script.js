// Open the surprise page
function openSurprise() {
    window.location.href = "surprise.html";
}

// Open the love message
function showMessage() {
    alert("❤️ Happy Birthday My Handsome Boy! ❤️\n\nYou are the best thing that has ever happened to me.\n\nThank you for always making me smile and standing by my side.\n\nI wish you endless happiness, success, good health, and all the love in the world.\n\nI love you today, tomorrow, and forever. ❤️");
}

// Create floating red hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (Math.random() * 20 + 20) + "px";

    heart.style.animationDuration = (Math.random() * 3 + 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

// Create a new heart every 300 milliseconds
setInterval(createHeart, 300);

// Create some hearts immediately when the page loads
for (let i = 0; i < 20; i++) {
    setTimeout(createHeart, i * 150);
}
