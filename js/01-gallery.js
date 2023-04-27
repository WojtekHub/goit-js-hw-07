import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
console.log(gallery);
const mapImages = galleryItems
  .map(
    (img) =>
      `<li class="gallery__item"><a class="gallery__link" href=${img.original}><img src=${img.preview} data-source="${img.original}" class="gallery__image" alt=${img.description}</a></li>`
  )
  .join("");

gallery.insertAdjacentHTML(`afterbegin`, mapImages);

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  const instance = basicLightbox.create(`
  //<img src="${event.target.dataset.source}" width="800" height="600">
`);

  document.addEventListener("keydown", (event) => {
    //console.log("Keydown: ", event);
    if (event.code === "Escape") {
      console.log("key escape");
      instance.close();
    }
  });

  instance.show();
});
