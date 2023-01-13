// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

console.log(createGalleryMarkup(galleryItems));

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(items) {
  const markup = items.map(({ preview, original, description }) => {
    return `
    
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a> `
  });
 
  return markup.join('');
}

function instalSimpleLightbox() {
  let lightbox  = new SimpleLightbox('.gallery .gallery__item', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  }

  instalSimpleLightbox();
