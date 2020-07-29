const expandLinkElement = document.querySelector(".navigation_link__expand");
const quantityLinkElement = document.querySelector(".navigation_link__quantity");
const submenuElement = document.querySelector(".submenu");




const numberInput = document.querySelector("#number");
const dropdownInput = document.querySelector("#typeOfCard");

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

window.addEventListener('click', function (e) {
    if (!submenuElement.contains(e.target) && submenuIsOpen) {
        toggleSubmenu();
    }
})
expandLinkElement.addEventListener("click", toggleSubmenu);

numberInput.addEventListener("change", function() {
     
    location.replace(`?quantity=${numberInput.value}&type=${dropdownInput.value}&page=0`);

} )

dropdownInput.addEventListener("change", function() {
     
    location.replace(`?quantity=${numberInput.value}&type=${dropdownInput.value}&page=0`);

} )



const nextPage = document.querySelector('.main_pagination__right');
const previousPage = document.querySelector('.main_pagination__left');
const currentPage = document.querySelector('#pageNumber');
let pageNumber = Number(currentPage.value);


nextPage.addEventListener("click", function() {
    if (pageNumber >= (Math.ceil(numberInput.value / 3) -1)) {
        return
    }
    pageNumber++;
    currentPage.value = pageNumber;

    console.log(currentPage.value);
    location.replace(`?quantity=${numberInput.value}&type=${dropdownInput.value}&page=${pageNumber}`);
    
    
} )


previousPage.addEventListener("click", function() {
    if (pageNumber <= 0 ) {
        return
    }
    pageNumber--;
    currentPage.value = pageNumber;

    console.log(currentPage.value);
    location.replace(`?quantity=${numberInput.value}&type=${dropdownInput.value}&page=${pageNumber}`);
    
    
} )