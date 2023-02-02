function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
// animation
const observer = new IntersectionObserver((entries)=> {
  entries.forEach((entry)=> {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }

  });
});
  const hiddenElements = document.querySelectorAll('.ani');
  hiddenElements.forEach((e1) => observer.observe(e1));

//Webb Telescope Moving Slides
var Slide = 0;
var slideshowImages = new Array("images/WebbSlideShowA.jpg", "images/WebbSlideshowB.jpg", "images/WebbSlideshowC")

function ChangeImage () {
  Slide++ 
  if (slide == SlideshowImages.length){
    slide = 0
  }
  document.getElementById("Webbslideshow").src = SlideshowImages[slide];
}

