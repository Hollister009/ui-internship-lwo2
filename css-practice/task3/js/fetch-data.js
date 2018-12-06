/* global fetch, window, document */

const getDataFromServer = (() => {
  const urlBlogs = 'http://localhost:3000/api/blogs';

  function validateResponse(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  function getData(data) {
    return data;
  }

  const fetchData = (url) => {
    fetch(url)
        .then(validateResponse)
        .then((res) => res.json())
        .then(getData);
  };

  return {
    init: () => {
      window.addEventListener('load', fetchData.bind(null, urlBlogs));
    },
  };
})();

getDataFromServer.init();

const renderLatestBlogs = () => {
  // blogItem constructor
  // const date = new Date();
};

renderLatestBlogs();

//   const blogItem = (title, watch, comments, date) => {
//     this.title = title;
//     this.watch = watch;
//     this.comments = comments;
//     this.date = date;
//   };

//   const latestTmpl = `
//     <figure>
//       <img src="img/post1.png" alt="Post 1">
//       <span class="item-post__date">
//         <b>${date.day}</b>${date.month}
//       </span>
//     </figure>
//     <h4 class="base-title">${title}</h4>
//     <p class="item-post__text">
//       Consectetur adipiscing elit, sed do eiusmod tempor
//       incididunt ut labore et dolore aliqua.
//     </p>
//     <hr/>
//     <span class="item-post__icon">
//       <i class="fas fa-eye"></i>${watch}
//     </span>
//     <span class="item-post__icon">
//       <i class="fas fa-comment"></i>${comments}
//     </span>
//   `;
// };

// document.body.append(itemPost);

const itemPost = document.createElement('DIV');
itemPost.classList.add('item-post', 'col-1-of-3');
