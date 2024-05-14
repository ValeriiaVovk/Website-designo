const burgerMenu = document.querySelector('.burger-menu');
const header = document.querySelector('.header');
const mobileMenu = document.createElement('div');
mobileMenu.classList.add('mobile-menu');
const overlay = document.querySelector('.overlay');

burgerMenu.addEventListener('click', function() {
    burgerMenu.classList.toggle('active-burger');
    overlay.classList.toggle('active');
    if (burgerMenu.classList.contains('active-burger')) {
        header.appendChild(mobileMenu);
        mobileMenu.innerHTML = `
            <ul class="mobile_nav">
                <li><a href="./about.html">OUR COMPANY</a></li>
                <li><a href="./locations.html">LOCATIONS</a></li>
                <li><a href="./contact.html">CONTACT</a></li>
            </ul>
        `;
    } else {
        header.removeChild(mobileMenu);
    }
})