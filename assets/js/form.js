// Access form elements
const usernameEl = document.getElementById('username');
const postTitleEl = document.getElementById('post-title');
const postContentEl = document.getElementById('post-content');
const submitEl = document.getElementById('submit');

// Create array to store posts
const posts = [];

// Obtain posts from localStorage if it exists
function initPosts() {
  const storedPosts = JSON.parse(localStorage.getItem('posts'));

  if (storedPosts !== null) {
    posts = storedPosts;
  }
}

// Action to be performed on submit button click
function addPost(event) {
  // Prevent default action
  event.preventDefault();

  // Obtain input values
  const username = usernameEl.value.trim();
  const postTitle = postTitleEl.value.trim();
  const postContent = postContentEl.value;

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

  // Reset form
  resetForm();
}

// Store posts to localStorage
function storePosts() {
  localStorage.setItem('posts', JSON.stringify(posts));
}

function resetForm() {
  usernameEl.value = '';
  postTitleEl.value = '';
  postContentEl.value = '';
}

// Add listener to submit element
submitEl.addEventListener('click', addPost);

// Initialize posts
initPosts();
