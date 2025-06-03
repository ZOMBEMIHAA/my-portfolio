// Get all cards and links
const cards = document.querySelectorAll(".social-card1");
const links = document.querySelectorAll(".social-anim1");
const overlay = document.getElementById("animation-overlay");
const animationContent = document.querySelector(".animation-content1");

// Add tilt effect on hover
cards.forEach((card) => {
  card.addEventListener("mousemove", handleTilt);
  card.addEventListener("mouseleave", resetTilt);
});

// Handle tilt effect based on mouse position
function handleTilt(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const tiltX = (y - centerY) / 10;
  const tiltY = (centerX - x) / 10;

  card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.05)`;
  card.style.transition = "transform 0.1s ease";
  card.style.zIndex = "10";
}

// Reset tilt when mouse leaves
function resetTilt(e) {
  const card = e.currentTarget;
  card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
  card.style.transition = "transform 0.5s ease";
  card.style.zIndex = "1";
}

// Add click animation for links
links.forEach((link) => {
  link.addEventListener("click", handleLinkClick);
});

// Handle link click with animation
function handleLinkClick(e) {
  e.preventDefault();

  const link = e.currentTarget;
  const platform = link.getAttribute("data-platform");
  const targetUrl = link.href;
  const rect = link.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  // Set up the animation
  overlay.style.display = "flex";
  animationContent.className = "animation-content1";
  animationContent.classList.add(`animation-${platform}`);

  // Position the animation at the center of the clicked card
  overlay.style.justifyContent = "flex-start";
  overlay.style.alignItems = "flex-start";
  animationContent.style.marginLeft = `${centerX}px`;
  animationContent.style.marginTop = `${centerY}px`;

  // Start the animation
  setTimeout(() => {
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
    animationContent.style.transform = "scale(20)";
  }, 10);

  // Navigate to the link after animation
  setTimeout(() => {
    // Navigate to the actual URL
    window.location.href = targetUrl;
  }, 1000);
}

// Reset animation (only used for testing)
function resetAnimation() {
  animationContent.style.transform = "scale(0)";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";

  setTimeout(() => {
    overlay.style.display = "none";
  }, 500);
}
