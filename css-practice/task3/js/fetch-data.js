/* global fetch, window, document */
const blogs = 'http://localhost:3000/api/blogs';

const getDataFromServer = (url) => {
  function validateResponse(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  function fetchData(url) {
    return fetch(url)
        .then(validateResponse)
        .then((res) => res.json());
  }

  return fetchData(url);
};

const splitResponseData = (res) => {
  const latestIds = res.latest;
  const latestItems = res.blogs.filter((item) => latestIds.includes(item.id));
  const otherItems = res.blogs.filter((item) => !latestIds.includes(item.id));
  renderLatestBlogs(latestItems);
  renderFooterBlogs(otherItems);
};

// Parsing json blogs
const getDataFromObj = (obj) => {
  const {published, previewImg, description, title, watched, comments} = obj;
  const date = _formatDate(published);

  // Retriving month & date
  function _formatDate(dateISO) {
    const date = new Date(dateISO);
    const calendar = [
      'Jan', 'Feb', 'Mar', 'Apr',
      'May', 'Jun', 'Jul', 'Aug',
      'Sep', 'Oct', 'Nov', 'Dec',
    ];
    return {
      year: date.getFullYear(),
      month: calendar[date.getMonth()],
      day: date.getDate(),
    };
  }

  // Return new object
  return {
    date: date,
    title: title,
    describe: description,
    preview: previewImg,
    watched: watched,
    comments: comments,
  };
};

// Render Latest Blogs
const renderLatestBlogs = (array) => {
  const latestPost = document.querySelector('.latest-posts');
  latestPost.innerHTML = '';

  array.forEach((el) => {
    const blog = getDataFromObj(el);
    latestPost.append(_createNewItem(blog));
  });

  // Creating a new itemPost
  function _createNewItem(obj) {
    const itemPost = document.createElement('DIV');
    itemPost.classList.add('item-post', 'col-1-of-3');
    itemPost.innerHTML = _getInnerTemplate(obj);
    return itemPost;
  }

  function _getInnerTemplate(info) {
    const {month, day} = info.date;
    const tmpl = `
      <figure>
        <img src="${info.preview}" alt="">
        <span class="item-post__date">
          <b>${day}</b>${month}
        </span>
      </figure>
      <h4 class="base-title">${info.title}</h4>
      <p class="item-post__text">
        ${info.describe}
      </p>
      <hr/>
      <span class="item-post__icon">
        <i class="fas fa-eye"></i>${info.watched}
      </span>
      <span class="item-post__icon">
        <i class="fas fa-comment"></i>${info.comments}
      </span>
    `;
    return tmpl;
  }
};

// Render Footer Blogs
const renderFooterBlogs = (array) => {
  const footerBlogs = document.querySelector('.footer__blogs');
  footerBlogs.innerHTML = '';

  array.forEach((el) => {
    const blog = getDataFromObj(el);
    footerBlogs.append(_createNewItem(blog));
  });

  function _createNewItem(obj) {
    const item = document.createElement('DIV');
    item.classList.add('footer__blogs-item');
    item.innerHTML = _getInnerTemplate(obj);
    return item;
  }

  function _getInnerTemplate(info) {
    const {year, month, day} = info.date;
    const tmpl = `
        <img src=${info.preview} alt="">
        <div class="footer__blogs-describe">
          <p class="base-title">${info.title}</p>
          <span class="date">${day} ${month}, ${year}</span>
        </div>
    `;
    return tmpl;
  }
};

// Get data from api + call the functions
window.addEventListener('load', () => {
  const data = getDataFromServer(blogs);
  data.then(splitResponseData);
});
