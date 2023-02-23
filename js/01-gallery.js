import { galleryItems } from "./gallery-items.js";
// Change code below this line

// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// 2. Реалізація делегування на div.gallery і отримання url великого зображення.
// 3. Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.
// Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// 4.Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// 5. Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям.
// Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="href=${original}"
      alt="${description}"
    />
  </a>
</div>`;
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

// DELEGATION OF THE EVENT
galleryContainerRef.addEventListener("click", (event) => {
  event.preventDefault();
  const originalImgRef = event.target.dataset.source;

  const instance = basicLightbox.create(
    `
  <img src="" width="800" height="600">
`,
    {
      onShow: (instance) => {
        const elem = instance.element();
        return elem.setAttribute("src", `${originalImgRef}`);
      }
    }
  );

  instance.show();
});

// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям.