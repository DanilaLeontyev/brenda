const headerBgImage = document.querySelector('.header--bgImage')

window.onscroll = () => parallaxScroll(headerBgImage)

function parallaxScroll(item) {
    item.style.right = -window.pageYOffset * 1.5 + 'px';
}