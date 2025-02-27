// javascript for index.html
const container = document.querySelector('.blogs');
const searchForm = document.querySelector('.search');

const renderPosts = async (term) => {
  console.log(term);
  // let uri = 'http://localhost:3000/posts?_sort=likes&_order=desc';
  let uri = 'https://jsonplaceholder.typicode.com/posts';

  if (term) {
    // uri += `&q=${term}`;
    uri += `?q=${term}`;

  }

  const res = await fetch(uri);
  const posts = await res.json();
  // console.log(posts);

  let template = '';
  posts.forEach(post => {
    template += `
      <div class="post">
        <h2><span>${post.id}) </span>${post.title}</h2>
        <p>${post.body.slice(0, 50)}...</p>
        <a href="details.html?id=${post.id}">Read more</a>
      </div>
    `
  });

  container.innerHTML = template;
};

// search
searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  renderPosts(searchForm.term.value.trim());
});

window.addEventListener('DOMContentLoaded', () => renderPosts());