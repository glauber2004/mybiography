//one-part
const imagesOne = ['/mybiography/images/glauber-ar-image.jpeg', 
  '/mybiography/images/glauber-family-image.jpg'
]; 
    
const imgElementOne = document.getElementById('image-one');
let currentIndexOne = 0;

function changeImageOne() {
  currentIndexOne = (currentIndexOne + 1) % imagesOne.length; 
  imgElementOne.src = imagesOne[currentIndexOne];
}
setInterval(changeImageOne, 10000);



//two-part
const imagesTwo = ['/mybiography/images/glauber-studio-image.jpg',
  '/mybiography/images/class-cc-image.jpg'
]; 
  
const imgElement = document.getElementById('image-two');
let currentIndex = 0;

function changeImageTwo() {
currentIndex = (currentIndex + 1) % imagesTwo.length; 
imgElement.src = imagesTwo[currentIndex];
}
setInterval(changeImageTwo, 10000);