//With async function
export default class SearchGiphy {
  static async getGiph(searchObject) {
    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${searchObject}&limit=5&offset=0&rating=g&lang=en`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}

//With fetch()
// export default class SearchGiphy {
//   static getGiph(searchObject) {
//     return fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${searchObject}&limit=5&offset=0&rating=g&lang=en`)
//       .then(function(response) {
//         if (!response.ok) {
//           throw Error(response.statusText);
//         }
//         return response.json();
//       })
//       .catch(function(error) {
//         return error;
//       });
//   }
// }

// With promise
// export default class searchGiphy {
//   static getGiph(searchObject) {
//     return new Promise(function(resolve, reject) {
//       let request = new XMLHttpRequest();
//       const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${searchObject}&limit=5&offset=0&rating=g&lang=en`;
//       request.onload = function() {
//         if (this.status === 200) {
//           resolve(request.response);
//         } else {
//           reject(request.response);
//         }
//       };
//       request.open("GET", url, true);
//       request.send();
//     });
//   }
// }