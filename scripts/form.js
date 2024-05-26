const date = new Date();
let currentyear = date.getFullYear();
document.getElementById("currentyear").innerHTML = currentyear;

let lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = lastModified;

const products = [
    {
      id: fc-1888,
      name: "flux capacitor",
      avgRating: 4.5
    },

    {
      id: fc-2050,
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: fs-1987,
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: ac-2000,
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: jj-1969,
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

  //review form//

  document.addEventListener('DOMContentLoaded',
    function(){
    const reviewForm = document.querySelector('#reviewForm');
    const counterKey = 'reviewsCompleted';

    let reviewsCompleted = localStorage.getItem(counterKey) || 0;
   console.log(`Number of reviews completed:${reviewsCompleted}`);
   reviewForm.addEventListener('submit',
    function(event){
    event.preventDefault();

    //Perform from submission actions here//
   reviewsCompleted++;
  localStorage.setItem(counterKey, reviewsCompleted);
  console.log(`Number of reviews completed update:${reviewsCompleted}`);
});
    });

    
    //JavaScript code to handle date formatting and validation
  document.addEventListener("DOMContentLoaded", function() {
    var dateInput = document.getElementById('date');

    // Add event listener to validate date input
    dateInput.addEventListener('input', function(event) {
      var inputDate = event.target.value;
      var isValidDate = isValidDateFormat(inputDate);

      if (!isValidDate) {
        alert('Please enter a valid date in the format YYYY-MM-DD.');
        event.target.value = ''; // Clear the input field
      }
    });

    // Function to check if date is in the format YYYY-MM-DD
    function isValidDateFormat(dateString) {
      var regex = /^\d{4}-\d{2}-\d{2}$/;
      return regex.test(dateString);
    }
  });






