
function toggleLike(likeCountId) {
  var likeCountElement = document.getElementById(likeCountId);
  var currentLikes = parseInt(likeCountElement.innerText);

  if (likeCountElement.classList.contains('liked')) {
    currentLikes--;
    likeCountElement.classList.remove('liked');
  } else {
    currentLikes++;
    likeCountElement.classList.add('liked');
  }

  likeCountElement.innerText = currentLikes + " Likes";
}
