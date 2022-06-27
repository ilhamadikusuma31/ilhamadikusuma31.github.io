const scriptURL = "https://script.google.com/macros/s/AKfycbwqljeJBO2twb5X9P14CytVsTtGhG-RsCBofA27O0kQjD9Popj-xFFGBZoHFAs_VPxJ/exec";
const form = document.forms["contact-form"];

const buttonKirim = document.querySelector(".btn-kirim");
const buttonTunggu = document.querySelector(".btn-tunggu");
const tulisanBerhasil = document.querySelector(".alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  buttonKirim.classList.toggle("d-none");
  buttonTunggu.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      buttonKirim.classList.toggle("d-none");
      buttonTunggu.classList.toggle("d-none");
      tulisanBerhasil.classList.toggle("d-none");
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

const navLinks = document.querySelectorAll(".nav-link");
const navBar = document.querySelector(".navbar-nav");

navBar.addEventListener("click", function (e) {
  navLinks.forEach((i) => {
    i.classList.remove("active");
    if (i.className === e.target.className) {
      e.target.classList.add("active");
    }
  });
});
