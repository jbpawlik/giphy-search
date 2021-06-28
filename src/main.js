
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// click functionality
//  let searchObject = input from the search
$('#searchButton').click(function(event) {
  event.preventDefault()

  let searchObject = $('#searchInput').val();

  let request = new XMLHttpRequest();

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${searchObject}&limit=5&offset=0&rating=g&lang=en`;

  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      getElements(response);
      console.log(response);
    }
  };

  request.open("GET", url, true);
  request.send();

  function getElements(response) {
    let responseArray = [0, 1, 2, 3, 4]
    responseArray.forEach(function(index) {
      $('#showGif').append("<img src=" + response.data[index].images.preview_gif.url + " alt='a gif'>");
    });
  }
});

$('#trendButton').click(function(event) {
  event.preventDefault();

  let request = new XMLHttpRequest();

  const url = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=25&rating=r`;

  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      getElements(response);
      console.log(response);
    }
  };

  request.open("GET", url, true);
  request.send();

  function getElements(response) {
    let responseArray = [0, 1, 2, 3, 4];
    responseArray.forEach(function(index) {
      $('#showTrend').append("<img src=" + response.data[index].images.preview_gif.url + " alt='a gif'>");
    });
  }
});









  // try {
  //   if(request.status !== 200) {
  //     console.log(request)
  //     throw Error;
  //   }
  // } catch(error) {
  //   console.error('bad input')
  // }

