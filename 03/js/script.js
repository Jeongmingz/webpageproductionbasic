
document.querySelectorAll('.imageChoice img').forEach((img) => {
  img.addEventListener("click", (e) => {
    document.querySelector('.mainDiv img').src = e.target.src;
  });
});
