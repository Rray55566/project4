const toggleCheckbox = document.getElementById('switch');

const contentOne = document.getElementById('burner-flame');




toggleCheckbox.addEventListener('change', () => {

  if (toggleCheckbox.checked) {

    contentOne.style.display = 'block';
   
    

  } else {

    contentOne.style.display = 'none';

   

  }
});