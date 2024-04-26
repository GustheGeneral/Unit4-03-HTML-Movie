//JS FILE FOR INDEX.HTML
//CREATED BY : GUSTAV I

function ageCheck() {
  // Get the user's age from the input field
  var ageInput = document.getElementById("age").value;

  // Checks if the user input is empty
  if (ageInput === "") {
    document.getElementById("result").innerText = "Please input your age.";
    return;
  }

  // Checks if the user input is not a number, or is a negative number or 0
  if (isNaN(ageInput) || ageInput <= 0 || ageInput % 1 !== 0) {
    document.getElementById("result").innerText = "Please enter a valid positive integer age.";
    return;
  }

  // Convert the age input to an integer
  var age = parseInt(ageInput);

  // Determine the appropriate message based on the age
  if (age >= 17) {
    document.getElementById("result").innerText = "You can go to an R-rated movie alone.";
  } else if (age >= 13) {
    document.getElementById("result").innerText = "You can go to a PG-13 movie alone.";
  } else if (age >= 5) {
    document.getElementById("result").innerText = "You can go to a G or PG movie alone.";
  } else {
    document.getElementById("result").innerText = "You are too young to go to a movie alone.";
  }
}

