let noClickCount = 0;

function openCalendar() {
    document.getElementById('landingPage').style.display = 'none';
    document.getElementById('calendarPage').style.display = 'block';
    createGiftConfetti();
}

function createGiftConfetti() {
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'letter-rain';
        confetti.textContent = ['💖', '💕', '💗', '💓', '💘', '🌹', '🌸', '🎀'][Math.floor(Math.random() * 8)];
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        confetti.style.fontSize = `${Math.random() * 2 + 1}rem`;
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 4000);
    }
}

function openModal() {
    noClickCount = 0; // Reset the no button count
    document.querySelector('.no-btn').style.display = 'inline-block'; // Show the no button
    document.getElementById('valentineModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('valentineModal').style.display = 'none';
}

function sayYes() {
    const sweetMessages = [
        "My heart is so happy! You make me the luckiest person alive! 💕",
        "I love you more than words can say! Happy Valentine's Day! 🌹",
        "Forever and always, my love! 💑",
        "You are my everything! Thank you for saying yes! 💖",
        "My dreams came true when you said yes! I love you! 💕",
        "You make my world complete! Happy Valentine's Day! 🌹",
        "I can't wait to spend forever with you! 💑",
        "My love for you grows stronger every day! 💖"
    ];
    const randomMessage = sweetMessages[Math.floor(Math.random() * sweetMessages.length)];
    document.getElementById('response').innerHTML = randomMessage;
    createModernCelebration();
    
    // Show the love letter after a delay
    setTimeout(() => {
        showLoveLetter();
    }, 2000);
}

function sayNo() {
    noClickCount++;
    
    const beggingMessages = [
        "Please baby 🥺💕",
        "Don't break my heart 😢💔",
        "Please say yes my love 🥺💖",
        "I can't imagine Valentine's without you 🥺💕",
        "Pretty please with a cherry on top 🥺🍒",
        "My heart aches for you 🥺💗",
        "Don't do this to me baby 🥺💔",
        "I'm begging you my love 🥺💕",
        "One chance is all I ask 🥺💖",
        "My world would be empty without you 🥺💔"
    ];
    
    const randomBeggingMessage = beggingMessages[Math.floor(Math.random() * beggingMessages.length)];
    document.getElementById('response').innerHTML = randomBeggingMessage;
    
    // After 3 no clicks, hide the no button
    if (noClickCount >= 3) {
        document.querySelector('.no-btn').style.display = 'none';
        document.getElementById('response').innerHTML = "You can't say no anymore! 🥺💕 Just click Yes! 💖";
    }
}

function showLoveLetter() {
    document.getElementById('valentineModal').style.display = 'none';
    document.getElementById('loveLetterModal').style.display = 'flex';
    document.getElementById('loveLetterModal').classList.add('show');
}

function closeLoveLetter() {
    document.getElementById('loveLetterModal').classList.remove('show');
    setTimeout(() => {
        document.getElementById('loveLetterModal').style.display = 'none';
    }, 500);
}

function openEnvelope() {
    const envelope = document.getElementById('envelope');
    envelope.style.opacity = '0';
    envelope.style.transform = 'scale(0.5)';
    
    // Show the letter after envelope disappears
    setTimeout(() => {
        envelope.style.display = 'none';
        document.getElementById('letterContent').classList.add('show');
    }, 300);
}

function createModernCelebration() {
    // Create floating emojis
    const emojis = ['💕', '💖', '💗', '💓', '💘', '🫶', '✨', '💫', '🌟', '🎀'];
    
    // Create 100 floating emojis
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.className = 'emoji-float';
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = `${Math.random() * 100}%`;
            emoji.style.animationDelay = `${Math.random() * 0.5}s`;
            emoji.style.fontSize = `${Math.random() * 2 + 1}rem`;
            document.body.appendChild(emoji);
            setTimeout(() => emoji.remove(), 4000);
        }, i * 30);
    }
    
    // Create sparkle trail
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            createSparkleTrail();
        }, i * 100);
    }
    
    // Create pulsing hearts
    setTimeout(() => {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                createPulsingHeart();
            }, i * 200);
        }
    }, 500);
}

function createSparkleTrail() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.innerHTML = ['✨', '💫', '🌟', '⭐', '💥'][Math.floor(Math.random() * 5)];
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.position = 'fixed';
    sparkle.style.fontSize = '2rem';
    sparkle.style.animation = 'sparklePop 1s ease forwards';
    sparkle.style.zIndex = '1002';
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
}

function createPulsingHeart() {
    const heart = document.createElement('div');
    heart.className = 'pulse-heart';
    heart.innerHTML = '💖';
    heart.style.left = `${Math.random() * 80 + 10}%`;
    heart.style.top = `${Math.random() * 80 + 10}%`;
    heart.style.position = 'fixed';
    heart.style.fontSize = '4rem';
    heart.style.animation = 'heartPulse 1.5s ease-in-out infinite';
    heart.style.zIndex = '1001';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

// Add dynamic styles for new animations
const style = document.createElement('style');
style.textContent = `
    @keyframes emojiFloat {
        0% {
            transform: translateY(100vh) scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) scale(1.5) rotate(360deg);
            opacity: 0;
        }
    }
    
    .emoji-float {
        position: fixed;
        animation: emojiFloat 3s linear forwards;
        z-index: 1000;
        pointer-events: none;
    }
    
    @keyframes sparklePop {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: scale(1.5) rotate(180deg);
            opacity: 1;
        }
        100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
        }
    }
    
    .sparkle {
        animation: sparklePop 1s ease forwards;
    }
    
    @keyframes heartPulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.3);
        }
        100% {
            transform: scale(1);
        }
    }
    
    .pulse-heart {
        animation: heartPulse 1.5s ease-in-out infinite;
    }
    
    /* Love Letter Styles */
    .love-letter-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.85);
        backdrop-filter: blur(10px);
        z-index: 2000;
        animation: fadeIn 0.5s ease;
    }
    
    .love-letter-modal.show {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .love-letter-container {
        position: relative;
        width: 90%;
        max-width: 500px;
        display: flex;
        justify-content: center;
    }
    
    .envelope {
        position: relative;
        width: 100%;
        max-width: 350px;
        cursor: pointer;
        transition: all 0.5s ease;
        background: linear-gradient(145deg, #ffb6c1 0%, #ff69b4 100%);
        border-radius: 20px;
        padding: 60px 30px;
        text-align: center;
        box-shadow: 0 15px 40px rgba(255, 105, 180, 0.35);
        border: 3px solid rgba(255, 255, 255, 0.3);
    }
    
    .envelope:hover {
        transform: scale(1.03);
        box-shadow: 0 20px 50px rgba(255, 105, 180, 0.45);
    }
    
    .envelope-text {
        font-family: 'Dancing Script', cursive;
        color: white;
        font-size: 2.5rem;
        font-weight: 700;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        animation: pulseText 1.5s ease-in-out infinite;
    }
    
    .envelope-hint {
        font-family: 'Poppins', sans-serif;
        color: rgba(255, 255, 255, 0.9);
        font-size: 1.1rem;
        margin-top: 15px;
        font-weight: 500;
    }
    
    @keyframes pulseText {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.9; transform: scale(0.98); }
    }
    
    .letter-content {
        position: relative;
        background: linear-gradient(145deg, #fff9fb 0%, #ffffff 100%);
        border-radius: 20px;
        padding: 40px 30px;
        box-shadow: 0 15px 40px rgba(255, 105, 180, 0.3);
        opacity: 0;
        transform: scale(0.8);
        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        display: none;
    }
    
    .letter-content.show {
        display: block;
        opacity: 1;
        transform: scale(1);
    }
    
    .letter-content h3 {
        font-family: 'Dancing Script', cursive;
        color: #e91e78;
        font-size: 2.2rem;
        text-align: center;
        margin-bottom: 25px;
    }
    
    .letter-content p {
        color: #6b5a5a;
        font-size: 1.1rem;
        line-height: 2;
        font-style: italic;
    }
    
    .letter-close {
        position: absolute;
        top: 15px;
        right: 15px;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #e91e78;
        transition: transform 0.3s ease;
    }
    
    .letter-close:hover {
        transform: rotate(90deg);
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('valentineModal');
    const loveLetterModal = document.getElementById('loveLetterModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
    if (event.target === loveLetterModal) {
        loveLetterModal.style.display = 'none';
    }
}
