import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const gallerySet = document.querySelector(".gallery");

const galleryProject = galleryItems
  .map(
    (image) =>
      `<div class = gallery__item> <a class="gallery__link" href="${image.original}"> <img class = "gallery__image" src = "${image.preview}" 
      alt = "${image.description}" data-source = "${image.original}" /> </a> </div>`
  )
  .join("");

function onClick(event) {
  event.preventDefault();
  const biggerImg = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`
  );
  biggerImg.show();
}
gallerySet.insertAdjacentHTML("afterbegin", galleryProject);

gallerySet.addEventListener("click", onClick);
