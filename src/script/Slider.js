const nextButton = document.querySelector('#AtmosphereNext');
const prevButton = document.querySelector('#AtmospherePrevious');
const sliderContainer = document.querySelector('.gallery--imageWrapper');

function scrollRightSlider() {
  let r = sliderContainer.style.right.replace('px', '');
  if (r) {
    r = parseInt(r);
  }
  r += 50;
  sliderContainer.style.right = r + 'px';
}

function scrollLeftSlider() {
  let r = sliderContainer.style.right.replace('px', '');
  if (r) {
    r = parseInt(r);
  }
  r -= 50;
  sliderContainer.style.right = r + 'px';
}
nextButton.addEventListener('click', scrollRightSlider);
prevButton.addEventListener('click', scrollLeftSlider);
