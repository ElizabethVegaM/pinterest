function getAPI(search) {
  var API_KEY = '9790189-118fcad7d04fb9dc16cd5033c';
  var URL = 'https://pixabay.com/api/?key=' + API_KEY + '&q=' + search;
  $.getJSON(URL, function(data) {
    if (parseInt(data.totalHits) > 0)
      $.each(data.hits, function(i, hit) {
        console.log(hit);
        printImages(hit.largeImageURL);
      });
    else
      console.log('No hits');
  });
};