import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const mapImages = galleryItems
  .map(
    (img) => `<li><a class="gallery__item" href="${img.original}">
<img class="gallery__image" src="${img.preview}" alt="Image description" />
</a></li>`
  )
  .join("");
gallery.insertAdjacentHTML("afterbegin", mapImages);

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  let gallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: "250",
  });
});
