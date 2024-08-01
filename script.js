document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const searchIcon = document.querySelector('.search-icon');
    const searchInput = document.querySelector('.search-input');
    const leftSide = document.querySelector('.left-side');
    const rightSide = document.querySelector('.right-side');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        searchIcon.classList.toggle('active');
        menuToggle.classList.toggle('active');
        leftSide.classList.toggle('active');
        rightSide.classList.toggle('active');
    });

    searchIcon.addEventListener('click', () => {
        searchInput.classList.toggle('active');
        if (searchInput.classList.contains('active')) {
            searchInput.style.display = 'block';
            searchInput.focus();
        } else {
            searchInput.style.display = 'none';
        }
    });
});