const images = ['/mybiography/images/11zon_cropped.jpeg', 
    '/mybiography/images/IMG-20190204-WA0068.jpg']; 
    
const imgElement = document.getElementById('image');
let currentIndex = 0;

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length; 
  imgElement.src = images[currentIndex];
}
setInterval(changeImage, 5000);
