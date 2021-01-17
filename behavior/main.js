/** @format */

const dropdownHeader = document.querySelector('.header__dropdown');

const dropdownToggler = document.querySelector('[headerDropdownToggle]');

const header = document.querySelector('.header');

header.addEventListener('click', function (event) {
     const hasAttr = event.target.parentNode.getAttribute('headerDropdownToggle');
     const isClose = dropdownHeader.classList.contains('d-none');
     if (hasAttr === null && !isClose) dropdownHeader.classList.add('d-none');
});

dropdownToggler.addEventListener('click', function () {
     const isClose = dropdownHeader.classList.contains('d-none');
     if (isClose) {
          dropdownHeader.classList.remove('d-none');
     } else dropdownHeader.classList.add('d-none');
});
