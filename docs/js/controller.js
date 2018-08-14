window.onload = () => {
  let defaultSearch = '';
  getAPI(defaultSearch);
};

function searchImages(search) {
  getAPI(search);
};