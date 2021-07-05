/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import SearchGiphy from './js/giphy.js';


//IIFE asynch function
// function getElements(response) {
//   if (response) {
//     let responseArray = [0, 1, 2, 3, 4];
//     responseArray.forEach(function(index) {
//       $('#showGif').append("<img src=" + response.data[index].images.preview_gif.url + " alt='a gif'>");
//     });
//   } else {
//     $('#showGif').append(`There was an error: ${response}`);
//   }
// }


// $('#searchButton').click(function(event) {
//   event.preventDefault();

//   let searchObject = $('#searchInput').val();
//   (async function() {
//     const response = await SearchGiphy.getGiph(searchObject);
//     getElements(response);
//   })();
// });

//With async function
function getElements(response) {
  if (response) {
    let responseArray = [0, 1, 2, 3, 4];
    responseArray.forEach(function(index) {
      $('#showGif').append("<img src=" + response.data[index].images.preview_gif.url + " alt='a gif'>");
    });
  } else {
    $('#showGif').append(`There was an error: ${response}`)
  }
}

async function makeApiCall(searchObject) {
  const response = await SearchGiphy.getGiph(searchObject);
  getElements(response);
}

$('#searchButton').click(function(event) {
  event.preventDefault();

  let searchObject = $('#searchInput').val();
  makeApiCall(searchObject);
});


//With fetch (separate function)
// function getElements(response) {
//   console.log(response);
//   if (response) {
//     let responseArray = [0, 1, 2, 3, 4];
//     responseArray.forEach(function(index) {
//       $('#showTrend').append("<img src=" + response.data[index].images.preview_gif.url + " alt='a gif'>");
//     });
//   } else {
//     $('#showTrend').text(`There was an error: ${response.message}`);
//   }
// }

// $('#searchButton').click(function(event) {
//   event.preventDefault();
//   let searchObject = $('#searchInput').val();
//   searchGiphy.getGiph(searchObject)
//     .then(function(response) {
//       getElements(response);
//       console.log(response);
//     });
// });


//With fetch (no separate function)
// $('#searchButton').click(function(event) {
//   event.preventDefault();

//   let searchObject = $('#searchInput').val();
//   SearchGiphy.getGiph(searchObject)
//     .then(function(response) {
//       let responseArray = [0, 1, 2, 3, 4];
//       responseArray.forEach(function(index) {
//         $('#showTrend').append("<img src=" + response.data[index].images.preview_gif.url + " alt='a gif'>");
//       });
//     });
// });


// With promise (original forEach broken)
// $('#searchButton').click(function(event) {
//   event.preventDefault();
//   let searchObject = $('#searchInput').val();
//   let promise = SearchGiphy.getGiph(searchObject);
//   promise.then(function(response){
//     $('#showGif').text(response);
//   }, function(error) {
//     $('.showErrors').text(`There was an error processing your request: ${error}`);
//   });
// });


// $('#trendButton').click(function(event) {
//   event.preventDefault();

//   let request = new XMLHttpRequest();

//   const url = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=25&rating=r`;

//   request.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       const response = JSON.parse(this.responseText);
//       getElements(response);
//     }
//   };

//   request.open("GET", url, true);
//   request.send();

//   function getElements(response) {
//     let responseArray = [0, 1, 2, 3, 4];
//     responseArray.forEach(function(index) {
//       $('#showTrend').append("<img src=" + response.data[index].images.preview_gif.url + " alt='a gif'>");
//     });
//   }
// });

// $('#uploadButton').click(function(event){
//   event.preventDefault();
//   let request = new XMLHttpRequest();
//   let sourceURL = $('#fileUpload').val();
//   const url = `https://upload.giphy.com/v1/gifs?api_key=${process.env.API_KEY}&source_image_url=${sourceURL}`;

//   request.onreadystatechange = function() {
//     if (this.readyState === 4 && this.status === 200) {
//       const response = JSON.parse(this.responseText);
//       getElements(response);
//       console.log("you've made it this far")
//       console.log(response);
//     }
//   };

//   request.open("POST", url, true);
//   request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//   request.send(`source_image_url=${sourceURL}`);

//   function getElements(response) {
//     console.log(response);
//   }
// });



//Original API call
// $('#searchButton').click(function(event) {
//   event.preventDefault()

//   let searchObject = $('#searchInput').val();

//   let request = new XMLHttpRequest();

//   const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${searchObject}&limit=5&offset=0&rating=g&lang=en`;

//   request.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       const response = JSON.parse(this.responseText);
//       getElements(response);
//       console.log(response);
//     }
//   };

//   request.open("GET", url, true);
//   request.send();

//   function getElements(response) {
//     let responseArray = [0, 1, 2, 3, 4]
//     responseArray.forEach(function(index) {
//       $('#showGif').append("<img src=" + response.data[index].images.preview_gif.url + " alt='a gif'>");
//     });
//   }
// });

// $('#trendButton').click(function(event) {
//   event.preventDefault();

//   let request = new XMLHttpRequest();

//   const url = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=25&rating=r`;

//   request.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       const response = JSON.parse(this.responseText);
//       getElements(response);
//     }
//   };

//   request.open("GET", url, true);
//   request.send();

//   function getElements(response) {
//     let responseArray = [0, 1, 2, 3, 4];
//     responseArray.forEach(function(index) {
//       $('#showTrend').append("<img src=" + response.data[index].images.preview_gif.url + " alt='a gif'>");
//     });
//   }
// });

// $('#uploadButton').click(function(event){
//   event.preventDefault();
//   let request = new XMLHttpRequest();
//   let sourceURL = $('#fileUpload').val();
//   const url = `https://upload.giphy.com/v1/gifs?api_key=${process.env.API_KEY}&source_image_url=${sourceURL}`;

//   request.onreadystatechange = function() {
//     if (this.readyState === 4 && this.status === 200) {
//       const response = JSON.parse(this.responseText);
//       getElements(response);
//     }
//   };

//   request.open("POST", url, true);
//   request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//   request.send('');

//   function getElements(response) {
//     console.log(response);
//   }
// });