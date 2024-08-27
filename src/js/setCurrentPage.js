function setCurrentPage(index) {
  const links = document.querySelectorAll('header nav ul li a');
  const link = links[index];

  link.classList.add('current');
}
