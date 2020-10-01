document.getElementById('nav-toggle').onclick = e => {
  e.preventDefault();
  e.currentTarget.classList.toggle('active');
  document.querySelector('.topnav').classList.toggle('active')
}