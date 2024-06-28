// Access submit button element
const submitEl = document.getElementById('submit');

// Create array to store posts
const posts = [];

// Obtain posts from localStorage if it exists
function init() {
  const storedPosts = JSON.parse(localStorage.getItem('posts'));

  if (storedPosts !== null) {
    posts = storedPosts;
  }
}

// Action to be performed on submit button click
function addPost(event) {
  // Prevent default action
  event.preventDefault();
}

// Store posts to localStorage
function storePosts() {
  localStorage.setItem('posts', JSON.stringify(posts));
}

// Add listener to submit element
submitEl.addEventListener('click', addPost);

// Initialize posts
init();
