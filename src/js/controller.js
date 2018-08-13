searchInput.onkeydown = function(e) {
  if (e.keyCode === 13) {
    imageContainer.innerHTML = '';
    getAPI(searchInput.value);
  }
};