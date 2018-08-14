searchInput.onkeydown = function(key) {
  if (key.keyCode === 13) {
    imageContainer.innerHTML = '';
    searchImages(searchInput.value);
  }
};

function printImages(image) {
  imageContainer.innerHTML += `<div class="pinWrapper card" data-toggle="modal" data-target=".bd-example-modal-lg">
    <img src="${image}" class="imageResult" alt="" onclick="showImage()">
    <div class="extra">
      <button class="btn pin-btn">
        <i class="fas fa-ellipsis-h"></i>
      </button>
    </div>
  </div>
  <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <i class="fas fa-ellipsis-h"></i>
          <button class="btn">
            <i class="fas fa-upload"></i>
            <span>Enviar</span>
          </button>
          <button class="btn">
            <i class="fas fa-thumbtack"></i>
            <span>Guardar</span>
          </button>
        </div>
      </div>
    </div>
  </div>`;
}