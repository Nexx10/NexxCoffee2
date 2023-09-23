// Toggle class active untuk hamburger menu

const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// toggle class active untuk search form

const searchForm = document.querySelector(".search-form");

//ketika tombol search diklik
document.querySelector("#search").onclick = () => {
  searchForm.classList.toggle("active");
};

// klik diluar sidebar untuk menutup sidebar

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
