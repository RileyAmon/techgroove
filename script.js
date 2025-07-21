
document.addEventListener('DOMContentLoaded', () => {
  const bg = document.getElementById('background');
  const thumbnails = document.querySelectorAll('.bg-select');
  thumbnails.forEach(img => {
    img.addEventListener('click', () => {
      const newBg = img.getAttribute('src');
      bg.style.backgroundImage = `url('${newBg}')`;
    });
  });
});
