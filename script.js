const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(menuItem => {
  let intervalId;
  let frameIndex = 0;
  let direction = 1; // 1 for forward, -1 for backward
  const frames = 17; // Total frames from ballot-anim00 to ballot-anim16
  const frameDuration = 15; // Milliseconds between frames

  menuItem.addEventListener('mouseenter', function() {
    clearInterval(intervalId);
    direction = 1; // Ensure forward direction
    frameIndex = 0;
    intervalId = setInterval(() => {
      if (frameIndex === frames - 1) {
        clearInterval(intervalId);
        return;
      }
      frameIndex++;
      const frameNumber = frameIndex < 10 ? `0${frameIndex}` : `${frameIndex}`;
      this.querySelector('.icon').src = `ballot-anim${frameNumber}.png`;
    }, frameDuration);
  });

  menuItem.addEventListener('mouseleave', function() {
    clearInterval(intervalId);
    direction = -1; // Change direction to reverse the animation
    intervalId = setInterval(() => {
      if (frameIndex === 0) {
        clearInterval(intervalId);
        return;
      }
      frameIndex--;
      const frameNumber = frameIndex < 10 ? `0${frameIndex}` : `${frameIndex}`;
      this.querySelector('.icon').src = `${this.querySelector('.icon').getAttribute('data-src')}${frameNumber}.png`;
    }, frameDuration);
  });
});
