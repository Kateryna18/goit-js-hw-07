import { galleryItems } from './gallery-items.js';
// Change code below this line


// CREATE MARKUP
function createGalleryItems(galleryItems) {
    return galleryItems
      .map(({ preview, original, description }) => {
        return `<li><a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a></li>`;
      })
      .join("");
  }
  

  // FIND ELEMENT
  const galleryContainerRef = document.querySelector(".gallery");

  // RENDER MARKUP IN HTML
galleryContainerRef.insertAdjacentHTML(
    "afterbegin",
    createGalleryItems(galleryItems)
  );

//   INITIALIZING LIBRARY AND SETTINGS
let gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250,  });
