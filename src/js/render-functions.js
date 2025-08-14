import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector('.gallery');


const lightbox = new SimpleLightbox('.gallery a');

function templateImage(img) {
  return `
    <a href="${img.largeImageURL}" class="gallery__item">
      <img src="${img.webformatURL}" alt="${img.tags}" />
      <div class="stats">
        <p>Likes: ${img.likes}</p>
        <p>Views: ${img.views}</p>
        <p>Comments: ${img.comments}</p>
        <p>Downloads: ${img.downloads}</p>
      </div>
    </a>
  `;
}

export function createGallery(images) {
  const markup = images.map(templateImage).join('');
  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}


export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  document.querySelector('.loader').classList.add('visible');
}

export function hideLoader() {
  document.querySelector('.loader').classList.remove('visible');
}

export function showLoadBtn() {
  const btn = document.querySelector('.js-loadbtn');
  if (btn.classList.contains('is-hidden')) {
    btn.classList.remove('is-hidden');
  }
}

export function hideLoadBtn() {
  const btn = document.querySelector('.js-loadbtn');
  if (!btn.classList.contains('is-hidden')) {
    btn.classList.add('is-hidden');
  }
}
