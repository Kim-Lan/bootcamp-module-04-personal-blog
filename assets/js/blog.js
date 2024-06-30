// Create array to store posts
let posts = [];

// Obtain posts from localStorage if it exists
function initPosts() {
  const storedPosts = JSON.parse(localStorage.getItem('posts'));

  if (storedPosts !== null) {
    posts = storedPosts;
  }
}

initPosts();
