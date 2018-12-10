/* global fetch, window, document */
const BLOGS_API_URL = 'http://localhost:3000/api/blogs';

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
  const latestItems = [];
  const otherItems = [];
  res.blogs.forEach((item) => {
    if (latestIds.includes(item.id)) latestItems.push(item);
    else otherItems.push(item);
  });
  renderLatestBlogs(latestItems);
  renderFooterBlogs(otherItems);
};

// Parsing json blogs
const prepareBlogModel = (obj) => {
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

const renderBlogs = (blogs, container, factory) => {
  container.innerHTML = '';
  blogs.forEach((el) => {
    const blog = prepareBlogModel(el);
    container.append(factory(blog));
  });
};

// Render Latest Blogs
const renderLatestBlogs = (array) => {
  const latestPost = document.querySelector('.latest-posts');
  renderBlogs(array, latestPost, _createLatestBlogItem);

  // Creating a new itemPost
  function _createLatestBlogItem(obj) {
    const itemPost = document.createElement('DIV');
    itemPost.classList.add('col-1-of-3', 'item-post');
    itemPost.innerHTML = _getInnerTemplate(obj);
    return itemPost;
  }

  function _getInnerTemplate(info) {
    const {date, title, describe, preview, watched, comments} = info;
    const {month, day} = date;
    const tmpl = `
      <figure>
        <img src="${preview}" alt="">
        <span class="item-post__date">
          <b>${day}</b><br/>
          ${month}
        </span>
      </figure>
      <h4 class="base-title">${title}</h4>
      <p class="item-post__text">
        ${describe}
      </p>
      <hr/>
      <span class="item-post__icon">
        <i class="fas fa-eye"></i> ${watched}
      </span>
      <span class="item-post__icon">
        <i class="fas fa-comment"></i> ${comments}
      </span>
    `;
    return tmpl;
  }
};

// Render Footer Blogs
const renderFooterBlogs = (array) => {
  const footerBlogs = document.querySelector('.footer__blogs');
  renderBlogs(array, footerBlogs, _createFooterBlogItem);

  function _createFooterBlogItem(obj) {
    const item = document.createElement('DIV');
    item.classList.add('footer__blogs-item');
    item.innerHTML = _getInnerTemplate(obj);
    return item;
  }

  function _getInnerTemplate({date, title, preview}) {
    const {year, month, day} = date;
    const tmpl = `
        <img src=${preview} alt="">
        <div class="footer__blogs-describe">
          <p class="base-title">${title}</p>
          <span class="date">${month} ${day}, ${year}</span>
        </div>
    `;
    return tmpl;
  }
};

// Get data from api + call the functions
window.addEventListener('load', () => {
  const data = getDataFromServer(BLOGS_API_URL);
  data.then(splitResponseData);
});
