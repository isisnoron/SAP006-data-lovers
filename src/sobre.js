const btnSobre = document.getElementById("btn-mobile-sobre");
function toggleMenu () {
  const nav = document.getElementById("nav-sobre");
  nav.classList.toggle('active');
}

btnSobre.addEventListener('click', toggleMenu);