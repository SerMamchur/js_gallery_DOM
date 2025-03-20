'use strict';

const bigImg = document.getElementById('largeImg');
const smallPhotos = document.querySelectorAll('.list-item');

smallPhotos.forEach((item) => {
  item.addEventListener('click', (e) => {
    const pictures = e.target.closest('img');

    e.preventDefault();

    if (pictures) {
      const img = pictures.src;

      bigImg.src = img;
    }
  });
});

// console.log(smallPhotos)
