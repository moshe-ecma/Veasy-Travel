let img = document.getElementById('img')
let country = document.getElementById('country')



window.onscroll = () => {
    const scrollY = window.scrollY;
    const scaleFactor = Math.max(0.5, 1 - scrollY / 1000); // Adjust scaling factor as needed
    img.style.transform = `scale(${scaleFactor})`;
  };


