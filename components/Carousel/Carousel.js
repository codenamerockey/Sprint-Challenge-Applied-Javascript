/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

//Code starts here

const carouselContainer = document.querySelector('.carousel-container');

function carouselComponent() {
  const carouselDiv = document.createElement('div');
  carouselDiv.classList.add('carousel');
  carouselContainer.appendChild(carouselDiv);

  const leftButtonDiv = document.createElement('div');
  leftButtonDiv.classList.add('left-button');
  carouselDiv.appendChild(leftButtonDiv);

  const leftArrowSpan = document.createElement('span');
  leftArrowSpan.textContent = '&#60;';
  leftButtonDiv.appendChild(leftArrowSpan);

  const image1 = document.createElement('img');
  image1.setAttribute('src', './assets/carousel/mountains.jpeg');
  image1.setAttribute('alt', 'picture of some mountains');
  carouselDiv.appendChild(image1);

  const image2 = document.createElement('img');
  image2.setAttribute('src', './assets/carousel/computer.jpeg');
  image2.setAttribute('alt', 'picture of a computer');
  carouselDiv.appendChild(image2);

  const image3 = document.createElement('img');
  image3.setAttribute('src', './assets/carousel/trees.jpeg');
  image3.setAttribute('alt', 'picture of trees');
  carouselDiv.appendChild(image3);

  const image4 = document.createElement('img');
  image4.setAttribute('src', './assets/carousel/turntable.jpeg');
  image4.setAttribute('alt', 'picture of a turn table that disc jockeys use');
  carouselDiv.appendChild(image4);

  const rightButtonDiv = document.createElement('div');
  rightButtonDiv.classList.add('left-button');
  rightButtonDiv.textContent = '>';
  carouselDiv.appendChild(rightButtonDiv);

  const rightArrowSpan = document.createElement('span');
  rightArrowSpan.textContent = '&#62;';
  rightButtonDiv.appendChild(rightArrowSpan);
}
