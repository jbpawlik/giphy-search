/* eslint-disable no-undef */

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

$('#uploadButton').click(function(event){
  event.preventDefault();
  let request = new XMLHttpRequest();
  let sourceURL = $('#fileUpload').val();
  const url = `https://upload.giphy.com/v1/gifs?api_key=${process.env.API_KEY}&source_image_url=${sourceURL}`;

  request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      getElements(response);
      console.log(response);
    }
  };

  request.open("POST", url, true);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  // request.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
  // request.setRequestHeader('Content-type', 'x-www-form-urlencoded')
  // request.setRequestHeader(source_image_url, 'https://media1.giphy.com/media/yvXJ5pI97sLg73VQ1h/giphy.gif?cid=ecf05e47lygwx2m4aaozhglmd1y8z2wf4bpm1hqk6xds5n62&rid=giphy.gif&ct=g')
  // request.setRequestHeader(`https://media1.giphy.com/media/yvXJ5pI97sLg73VQ1h/giphy.gif?cid=ecf05e47lygwx2m4aaozhglmd1y8z2wf4bpm1hqk6xds5n62%26rid=giphy.gif%26ct=g`, key)
  request.send('');

  function getElements(response) {
    console.log(response)

    
  }

  // https://upload.giphy.com/v1/gifs?api_key=xdohATlHgchpmpttpoNjtdWxKuLWJwUC&source_image_url=https://media1.giphy.com/media/yvXJ5pI97sLg73VQ1h/giphy.gif?cid=ecf05e47lygwx2m4aaozhglmd1y8z2wf4bpm1hqk6xds5n62%26rid=giphy.gif%26ct=g

  // try {
  //   if(request.status !== 200) {
  //     console.log(request)
  //     throw Error;
  //   }
  // } catch(error) {
  //   console.error('You are beautiful geniuses and I, the computer, am the one who is wrong!')
  // }

});


// https://upload.giphy.com/v1/gifs?api_key=xdohATlHgchpmpttpoNjtdWxKuLWJwUC&source_image_url=https://im6.ezgif.com/tmp/ezgif-6-f4b28f369803.mp4&=&=
// try {
//   if(request.status !== 200) {
//     console.log(request)
//     throw Error;
//   }
// } catch(error) {
//   console.error('bad input')
// }

