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

