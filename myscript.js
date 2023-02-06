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
var slide = 0;
var slideshowImages = new Array("images/WebbSlideShowA.jpg", "images/WebbSlideshowB.jpg", "images/WebbSlideshowC.jpg")

var description = new Array(" The Phantom Galaxy<Br>The Phantom Galaxy is a spiral galaxy where tendrils of darkness<br> stretch out from its brilliant blue core. While the Hubble photographed<br> the Galaxy previously, the Webb Telescope has uncovered the strains<br> of heat emitting gas and dust.",
"The Southern Ring Nebula<Br> The Southen Ring Nebula was orignially thought to possess<br> only a White Dwarf Star Until a closer inspection provided <br> by the Webb Telescope revealed not one, but three <br> stars within the nebula, one of which is theorised to<br> be emitting gas that is creating that 'halo' like veil", 
"The Pillars of Creation<Br> Dubbed the 'Pillars of Creation' these gaseous clouds<br> dozen of times bigger than our entire solar system <br> contain small specks Which are protostars being formed<br> These stars are so young they do not burn hydrogen yet, <br> and it will be yet some time for these protostars to mature. ")

function ChangeImage() {
  slide++ 
  if (slide == slideshowImages.length){
    slide = 0
  }
  document.getElementById("WebbSlideshow").src = slideshowImages[slide];
  document.getElementById("Discoveries").innerHTML = description[slide];
 }


document.getElementById("slideButton").onclick = function() {ChangeImage()};
