// Finds the <form> element in the page.
const form = document.querySelector("form");

// addEvent Listens for the user clicking 'Sign In'.
// to stops the page from refreshing - event.prevent
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  console.log(username, password);

  if (username === "admin" && password === "1234") {
    alert("Login successful!");
  } else {
    alert("Invalid login");
  }
});