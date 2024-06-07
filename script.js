let openMenu = document.getElementById('ham-open');
let close = document.getElementById('hide');
let navBar = document.getElementById('nav-bar');

openMenu.addEventListener('click', openModal);

function openModal(){
    navBar.style.display = 'block';
    openMenu.style.display = 'none';
    close.style.display = 'block';
}

close.addEventListener('click', closeModal);

function closeModal(){
    close.style.display = 'none';
    navBar.style.display = 'none';
    openMenu.style.display = 'block';
}