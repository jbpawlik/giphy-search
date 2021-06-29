/* eslint-disable no-undef */

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import searchGiphs from './js/giphy.js';

// click functionality
//  let searchObject = input from the search
// $('#searchButton').click(function(event) {
//   event.preventDefault();
//   let searchObject = $('#searchInput').val();
//   function getElements(response) {
//     let responseArray = [0, 1, 2, 3, 4];
//     responseArray.forEach(function(index) {
//       $('#showGif').append("<img src=" + response.data[index].images.preview_gif.url + " alt='a gif'>");
//     });
//   }
// });

$('#searchButton').click(function(event) {
  event.preventDefault();
  let searchObject = $('#searchInput').val();
  let promise = searchGiphs.getGiph(searchObject);
  promise.then(function(response){
    // let responseArray = [0, 1, 2, 3, 4];
    // console.log(response)
    // responseArray.forEach(function(index) {
    //   $('#showGif').append("<img src=" + response.data[index].images.preview_gif.url + " alt='a gif'>");
    // }, function(error) {
    //   $('.showErrors').text(`There was an error processing your request: ${error}`);
    // });
    $('#showGif').text(response);
  });
});
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
