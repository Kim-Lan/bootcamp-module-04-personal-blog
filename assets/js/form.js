// Access submit button element
const submitEl = document.getElementById('submit');

// Action to be performed on submit button click
function addPost(event) {
  // Prevent default action
  event.preventDefault();
}

// Add listener to submit element
submitEl.addEventListener('click', addPost);
