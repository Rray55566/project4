const toggleCheckbox = document.getElementById('switch');

const contentOne = document.getElementById('burner_flame');

 let CheckboxOn = false

toggleCheckbox.addEventListener('change', () => {

  if (toggleCheckbox.checked) {

    contentOne.style.display = 'block';
   
    

  } else {

    contentOne.style.display = 'none';


  }
});