/** @format */

const dropdownNavbarHeader = document.querySelector('header .navbar-dashboard .dropdown-navbar');

const dashboardNavbar = document.querySelector('header .navbar-dashboard');

const header = document.querySelector('header');

const toggleHeaderDropdownClass = 'show-dropdown';

const dropdownTitleSectionItems = document.querySelectorAll('.topic-sections-menu-item');

dropdownTitleSectionItems.forEach((element) => {
     element.addEventListener('mouseenter', function () {
          element.lastElementChild.classList.add('show-dropdown');
     });

     element.addEventListener('mouseleave', function () {
          element.lastElementChild.classList.remove('show-dropdown');
     });
});

header.addEventListener('click', function (event) {
     const parentElement = event.target.parentNode;
     const parentClass = parentElement.classList.contains('user-name-section');
     const isOpen = dropdownNavbarHeader.classList.contains(toggleHeaderDropdownClass);
     if (!parentClass && isOpen) dropdownNavbarHeader.classList.remove(toggleHeaderDropdownClass);
});

dashboardNavbar.addEventListener('click', function () {
     const isOpen = dropdownNavbarHeader.classList.contains(toggleHeaderDropdownClass);
     if (isOpen) dropdownNavbarHeader.classList.remove(toggleHeaderDropdownClass);
     else dropdownNavbarHeader.classList.add(toggleHeaderDropdownClass);
});
