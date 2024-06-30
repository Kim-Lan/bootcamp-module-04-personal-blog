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
    // Create post div
    const postEl = document.createElement('div');
    postEl.classList.add('post');

    // Create post title div
    const postTitleEl = document.createElement('div');
    postTitleEl.classList.add('post-title');
    postTitleEl.textContent = posts[i].postTitle;
    
    // Create post content div
    const postContentEl = document.createElement('div');
    postContentEl.classList.add('post-content');
    postContentEl.textContent = posts[i].postContent;

    // Create post author div
    const postAuthorEl = document.createElement('div');
    postAuthorEl.classList.add('post-author');
    postAuthorEl.textContent = 'Posted by: ' + posts[i].username;

    // Add elements to post container
    postContainerEl.appendChild(postEl);
    postEl.appendChild(postTitleEl);
    postEl.appendChild(postContentEl);
    postEl.appendChild(postAuthorEl);
  }
}

renderPosts();
