"use strict";
const requestify = require('requestify');
exports.httpHelper = {
  filterImages: function(query_objects) {
    let images = [];
    query_objects.forEach((obj) => {
      let image = {
        url: obj.contentUrl,
        snippet: obj.name,
        thumbnail: obj.thumbnailUrl,
        context: obj.hostPageUrl
      }
      let length = 27;
      if (image.snippet.length > length) image.snippet = `${image.snippet.slice(0, length)}...`;
      images.push(image);
    })
    return images;
  },
  bingSearch: function(search, offset){
    return requestify.request('https://api.cognitive.microsoft.com/bing/v5.0/images/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
            'Ocp-Apim-Subscription-Key':"f7a7970e35124d4d81a3fed709b578c8"
        },
        dataType: 'form-url-encoded',
        params: {
          q: search,
          count: 10,
          offset: offset,
          mkt: "en-us",
          safesearch: "moderate"
        }
    });
  }
}
