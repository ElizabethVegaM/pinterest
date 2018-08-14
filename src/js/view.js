searchInput.onkeydown = function(key) {
  if (key.keyCode === 13) {
    imageContainer.innerHTML = '';
    searchImages(searchInput.value);
  }
};

let num = 0;
function printImages(image) {
  num++;
  imageContainer.innerHTML += `<div class="pinWrapper card" data-toggle="modal" data-target="#a${num}">
    <img src="${image.largeImageURL}" class="imageResult" alt="">
    <div class="extra">
      <button class="btn pin-btn">
        <i class="fas fa-ellipsis-h"></i>
      </button>
    </div>
  </div>
  <div id="a${num}" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button class="btn modal-circle-btn">
            <i class="fas fa-ellipsis-h"></i>
          </button>
          <div class="modal-btn-group">
            <button class="btn modal-btn">
              <i class="fas fa-upload"></i>
              <span>Enviar</span>
            </button>
            <button id="savePin" class="btn modal-btn">
              <i class="fas fa-thumbtack"></i>
              <span>Guardar</span>
            </button>
          </div>
        </div>
        <div class="modal-body row">
          <div class="large-image-container">
            <img src="${image.largeImageURL}" class="image-result" alt="">
          </div>
          <div class="right-content">
            <button class="btn right-btn">
              <i class="fas fa-arrow-up"></i>
              <span>google.com</span>
            </button>
            <div class="right-comments">
              <span>Comentarios</span>
              <i class="fas fa-angle-down"></i>
            </div>
            <div class="right-info row">
              <div class="info-user col-9">
                <i class="fas fa-user-circle"></i>
                <span><strong>Rav</strong> ha guardado en <strong>Carpeta</strong></span>
              </div>
              <div class="info-pins col-3">
                <i class="fas fa-thumbtack"></i>
                <span>${image.favorites}</span>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </div>`;
}
