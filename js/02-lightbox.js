import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const paletContainer = document.querySelector(".gallery");

const images = galleryItems.map(
  (image) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${image.original}">
             <img
            class="gallery__image"
            src="${image.preview}"          
            data-source="${image.original}"           
            alt="${image.description}"         
            />      
        </a>     
    </li>`
);

paletContainer.insertAdjacentHTML("beforeend", images.join(""));

const litebox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
