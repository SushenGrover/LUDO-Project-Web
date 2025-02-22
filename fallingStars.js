const starContainer = document.querySelector('.star-container');
const numStars = 100; // Number of stars

for (let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.textContent = '★'; // Or use '*' or a star image
  starContainer.appendChild(star);

  // Random animation duration
  const duration = Math.random() * 5 + 3; // 3 to 8 seconds
  star.style.setProperty('--random-duration', `${duration}s`);

  // Random horizontal position
  const x = Math.random() * 100; // 0 to 100% of the container width
  star.style.setProperty('--random-x', `${x}%`);

  //Tiny offset to avoid synchronised animation
  star.style.animationDelay = `${Math.random() * 2}s`;
}