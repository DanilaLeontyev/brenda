const nextButton = document.querySelector('#AtmosphereNext');
const prevButton = document.querySelector('#AtmospherePrevious');
const sliderContainer = document.querySelector('.gallery--imageWrapper');
const imgArr = document.querySelectorAll('.gallery--imageWrapper>img');

let imgCount = 0;
let imgMargin = 30;

function scrollRightSlider() {
  let r = sliderContainer.style.right.replace('px', '');
  if (r) {
    r = parseInt(r);
  }
  if (imgCount === imgArr.length - 1) {
    sliderContainer.style.right = '0px';
    imgCount = 0;
    return;
  }

  r += imgArr[imgCount].clientWidth + imgMargin;
  sliderContainer.style.right = r + 'px';
  imgCount++;
}

function scrollLeftSlider() {
  let r = sliderContainer.style.right.replace('px', '');
  if (r) {
    r = parseInt(r);
  }

  if (imgCount === 0) {
    imgArr.forEach(img => {
      r += img.clientWidth + imgMargin;
      r = +r;
      console.log(r);
    });
    imgCount = imgArr.length - 1;
    r -= imgArr[imgArr.length - 1].clientWidth;
    sliderContainer.style.right = r + 'px';
    return;
  }

  r -= imgArr[imgCount - 1].clientWidth + imgMargin;
  sliderContainer.style.right = r + 'px';
  imgCount--;
}

nextButton.addEventListener('click', scrollRightSlider);
prevButton.addEventListener('click', scrollLeftSlider);

nextButton.addEventListener('touchstart', scrollRightSlider);
prevButton.addEventListener('touchstart', scrollLeftSlider);
