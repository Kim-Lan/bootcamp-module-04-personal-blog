// Access form elements
const usernameEl = document.getElementById('username');
const postTitleEl = document.getElementById('post-title');
const postContentEl = document.getElementById('post-content');
const errorMessageEl = document.getElementById('error-message');
const submitEl = document.getElementById('submit');

// Create array to store posts
let posts = [];

// Obtain posts from localStorage if it exists
function initPosts() {
  const storedPosts = JSON.parse(localStorage.getItem('posts'));

  if (storedPosts !== null) {
    posts = storedPosts;
  }
}

// Store posts to localStorage
function storePosts() {
  localStorage.setItem('posts', JSON.stringify(posts));
}

// Add listener to submit element
submitEl.addEventListener('click', function(event) {
  // Prevent default action
  event.preventDefault();

  // Obtain input values
  const username = usernameEl.value.trim();
  const postTitle = postTitleEl.value.trim();
  const postContent = postContentEl.value.trim();

  // Check required fields
  let isValid = true;
  if (username === '' || postTitle === '' || postContent === '') {
    isValid = false;
  }

  if (!isValid) {
    // Display error message if form is not valid
    errorMessageEl.style.visibility = 'visible';
  } else {
    // Add post if form is valid
    addPost(username, postTitle, postContent);
  }
});

function addPost(username, postTitle, postContent) {
  // Create post object
  const post = {
    username,
    postTitle,
    postContent
  };

  // Add post object to posts array
  posts.push(post);

  // Save posts to localStorage
  storePosts();

  // Redirect to blog page
  window.location.href = 'blog.html';
}

// Initialize posts
initPosts();
