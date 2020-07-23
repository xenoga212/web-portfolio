// grab DOM from elements
const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.navigation');
const navigationUl = document.querySelector('.navigation__ul');
const navigationItems = document.querySelectorAll('.navigation__item');

// set initial state of menu 
let showMenu = false;

menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuButton.classList.add('close');
    navigation.classList.add('show');
    navigationUl.classList.add('show');
    navigationItems.forEach(item => item.classList.add('show'));

    // set menu state 
    showMenu = true;

  } else {

    menuButton.classList.remove('close');
    navigation.classList.remove('show');
    navigationUl.classList.remove('show');
    navigationItems.forEach(item => item.classList.remove('show'));

    // set menu state
    showMenu = false;
  }
}

// close menu after user clicks on a navigation in mobile
navigationItems.forEach(item => {
  item.addEventListener('click', closeMenu);
})

function closeMenu() {
  menuButton.classList.remove('close');
  navigation.classList.remove('show');
  navigationUl.classList.remove('show');
  navigationItems.forEach(item => item.classList.remove('show'));

  // set menu state
  showMenu = false;
}