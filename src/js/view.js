function printImages(image) {
  imageContainer.innerHTML += `<div class="pinWrapper">
    <img src="${image}" class="imageResult" alt="">
    <div class="extra">
      <button class="btn pin-btn">
        <i class="fas fa-ellipsis-h"></i>
      </button>
    </div>
  </div>`;
}