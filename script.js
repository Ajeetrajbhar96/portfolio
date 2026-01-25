// TYPING EFFECT
let text = ["Frontend Developer","Web Designer","JavaScript Learner"];
let index = 0;
let count = 0;

function type(){
  if(index === text.length){
    index = 0;
  }

  let current = text[index];
  let letter = current.slice(0, ++count);

  document.getElementById("typing").textContent = letter;

  if(letter.length === current.length){
    index++;
    count = 0;
  }

  setTimeout(type,200);
}
type();

// DARK / LIGHT MODE
function toggleTheme(){
  document.body.classList.toggle("dark");
}

// MOBILE MENU
function toggleMenu(){
  document.querySelector("nav ul").classList.toggle("active");
}
// CLOSE MENU AFTER CLICK

document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector("nav ul").classList.remove("active");
  });
});
