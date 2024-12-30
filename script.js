const toggleCheckbox = document.getElementById("switch");
const contentOne = document.getElementById("burner_flame");
const tea = document.querySelector(".tea");


contentOne.style.display = "none";

toggleCheckbox.addEventListener("change", () => {
  if (toggleCheckbox.checked) {
    contentOne.style.display = "block"; 
  } 
  else {
    contentOne.style.display = "none";
    tea.classList.remove('boiling');
  }
});


const flameToggle = document.getElementById("switch_2");
const smallFlame = document.querySelector(".small-flame");
const largeFlame = document.querySelector(".large-flame");


let highFlame = false; 
largeFlame.style.display = "none"; 
flameToggle.addEventListener("click", () => {
    
  highFlame = !highFlame;

  if (highFlame) {
    smallFlame.style.display = "none";
    largeFlame.style.display = "block";
    tea.classList.add("boiling"); 
} else {
    smallFlame.style.display = "block";
    largeFlame.style.display = "none";
    tea.classList.remove("boiling"); 
    }
});
