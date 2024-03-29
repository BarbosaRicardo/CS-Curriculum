/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Syllabi:',
  'CST 334',
  "CST 336",
  'CST .',
  'CST ...',
  'CST ....'
];

/* 
  Step 1: Write a function that will create a menu component as seen below:
  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>
  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>
  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself
  Step 5: return the menu component.
  Step 6: add the menu component to the DOM

*/

function menuComponent(arr) {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  const menuList = document.createElement('ul');

  menu.appendChild(menuList);

  arr.forEach(item => {
    let menuItem = document.createElement('li');
    menuItem.textContent = item;

    menuList.appendChild(menuItem);
  });

  const menuButton = document.querySelector('.menu-button');
  const onMenuClick = document.querySelector('.menu')

  let Anchors = document.getElementsByTagName("a");
  console.log("anchors: ", Anchors)
  for (let i=0; i < Anchors.length; i++)
  {
    onMenuClick.addEventListener('click', () => {
      preventDefault();
      window.location = this.href;
    })
  }
  

  menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
  });

  return menu;
}

const header = document.querySelector('.header');
header.appendChild(menuComponent(menuItems));