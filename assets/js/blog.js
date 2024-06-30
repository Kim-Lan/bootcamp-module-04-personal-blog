// Access post container element
const postContainerEl = document.getElementById('post-container');

// Create array to store posts
let posts = [];

// Obtain posts from localStorage if it exists
function renderPosts() {
  const storedPosts = JSON.parse(localStorage.getItem('posts'));

  if (storedPosts !== null) {
    posts = storedPosts;
  }

  for (let i = 0; i < posts.length; i++) {
    const postEl = document.createElement('div');
    postEl.textContent = JSON.stringify(posts[i]);
    postContainerEl.appendChild(postEl);
  }
}

renderPosts();
