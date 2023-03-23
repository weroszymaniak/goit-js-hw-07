import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const gallerySet = document.querySelector(".gallery");

const galleryProject = galleryItems
  .map(
    (image) =>
      `<li><img class = gallery-item src = ${image.preview} alt = ${image.description} width = 400 </img> </li>`
  )
  .join("");

gallerySet.insertAdjacentHTML("afterbegin", galleryProject);
