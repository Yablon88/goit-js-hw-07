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

paletContainer.addEventListener("click", selectImage);

function selectImage(e) {
  e.preventDefault();
  const ClickOnImage = e.target.classList.contains("gallery__image");

  if (!ClickOnImage) {
    return;
  }

  const instance = basicLightbox.create(
    `<img src ="${e.target.dataset.source}" width="800" height="600">`
  );
  console.log(e.target.dataset.source);

  instance.show();
}
