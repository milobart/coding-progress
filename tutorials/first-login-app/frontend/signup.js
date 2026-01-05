const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.querySelector("#new-username").value;
  const password = document.querySelector("#new-password").value;

  if (username === "" || password === "") {
    alert("Please fill in all fields");
    return;
  }

  alert("Account created! (not really yet)");
});
