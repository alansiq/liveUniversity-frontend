const expandLinkElement = document.querySelector(".navigation_link__expand");
const submenuElement = document.querySelector(".submenu");

const numberInput = document.querySelector("#number");
const dropdownInput = document.querySelector("#typeOfCard");

const nextPage = document.querySelector('.main_pagination__right');
const previousPage = document.querySelector('.main_pagination__left');
const currentPage = document.querySelector('#pageNumber');


let pageNumber = Number(currentPage.value);
let submenuIsOpen = false;

function toggleSubmenu() {
    function toggleBoolean() {
        submenuIsOpen = !submenuIsOpen;
    }

    if (!submenuIsOpen) {
        submenuElement.classList.toggle('submenu__active');
        setTimeout(toggleBoolean, 200);

    } else {
        submenuElement.classList.toggle('submenu__active');
        setTimeout(toggleBoolean, 200);
    }

}

// Event listener to capture clicks outside submenu
window.addEventListener('click', function (e) {
    if (!submenuElement.contains(e.target) && submenuIsOpen) {
        toggleSubmenu();
    }
});

// Event listener to capture click in expand button
expandLinkElement.addEventListener("click", toggleSubmenu);

// Event listener to capture change on quantity input box - and add it to query params
numberInput.addEventListener("change", function() {
    location.replace(`?quantity=${numberInput.value}&type=${dropdownInput.value}&page=0`);
});

// Event listener to capture change on Type select box - and add it to query params
dropdownInput.addEventListener("change", function() {
    if (!numberInput.value) {
        numberInput.classList.add('error');
        return
    } else {
        numberInput.classList.remove('error');
    }
    location.replace(`?quantity=${numberInput.value}&type=${dropdownInput.value}&page=0`);
    
});

// Event listeners to capture next or previous page click
nextPage.addEventListener("click", function() {
    // Validate if there's a next page
    if (pageNumber >= (Math.ceil(numberInput.value / 3) -1)) {
        
        location.replace(`?quantity=${numberInput.value}&type=${dropdownInput.value}&page=${0}`);
        return
    }

    pageNumber++;
    currentPage.value = pageNumber;

    location.replace(`?quantity=${numberInput.value}&type=${dropdownInput.value}&page=${pageNumber}`);
});

// Event listeners to capture next or previous page click
previousPage.addEventListener("click", function() {
    // Page number can not be less than 0
    if (pageNumber <= 0 ) {
        const lastPage = Math.ceil(numberInput.value / 3) -1;
        location.replace(`?quantity=${numberInput.value}&type=${dropdownInput.value}&page=${lastPage}`);
        
        return
    }

    pageNumber--;
    currentPage.value = pageNumber;

    location.replace(`?quantity=${numberInput.value}&type=${dropdownInput.value}&page=${pageNumber}`);
});

