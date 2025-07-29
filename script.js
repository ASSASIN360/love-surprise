// Surprise reveal
document.getElementById("revealButton").addEventListener("click", function () {
  const fullText = `
You're my favorite notification, every single day. ❤️

From the very first day, you've been the best part of my life. These 9 months have flown by, but each moment has been unforgettable.
Your smile, your laughter, and even your scolding—it all means the world to me. You’ve made me believe in love more than ever before. 💖

No matter the distance, you’re always in my thoughts. I imagine the day we’ll celebrate all these little moments in person. Until then, just know:
you are cherished, loved, and appreciated more than words can say. Here's to forever with you. 💫
  `;

  document.getElementById("surpriseContent").classList.remove("hidden");

  const message = document.getElementById("typingMessage");
  const moreButton = document.getElementById("moreButton");
  let index = 0;
  message.innerHTML = "";

  function type() {
    if (index < fullText.length) {
      message.innerHTML += fullText.charAt(index);
      index++;
      setTimeout(type, 30);
    } else {
      moreButton.classList.remove("hidden");
    }
  }

  type();
});

document.getElementById("moreButton").addEventListener("click", function () {
  const video = document.getElementById("loveVideo");
  video.classList.remove("hidden");
  video.scrollIntoView({ behavior: 'smooth' });

  video.addEventListener("ended", function () {
    const btn = document.getElementById("finalSurpriseButton");
    btn.classList.remove("hidden");
    btn.scrollIntoView({ behavior: 'smooth' });
  });
});

document.getElementById("finalSurpriseButton").addEventListener("click", function () {
  window.location.href = "final.html";
});

// Falling hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";
  document.querySelector(".hearts-container").appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);
