document.addEventListener('DOMContentLoaded', function () {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    let navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        });
    });

    window.onscroll = () => {
        let header = document.querySelector('.header');
        header.classList.toggle('sticky', window.scrollY > 100);
    };

    function handleResponsive() {
        let header = document.querySelector('.header');
        let logo = document.querySelector('.logo');

        if (window.innerWidth <= 1200) {
            logo.style.marginRight = '2rem';

            menuIcon.style.display = 'block';
            navbar.style.display = 'none';

            header.style.paddingLeft = '2rem';
            header.style.paddingRight = '2rem';
        } else {
            logo.style.marginRight = '79rem';
            menuIcon.style.display = 'none';
            navbar.style.display = 'flex';
            header.style.paddingLeft = '10rem';
            header.style.paddingRight = '4rem';
        }

        let homeContent = document.querySelector('.home-content p');
        if (homeContent) {
            if (window.innerWidth <= 1200) {
                homeContent.style.width = '80%';
            } else {
                homeContent.style.width = '1000px';
            }
        }
    }

    handleResponsive();
    window.addEventListener('resize', handleResponsive);
});
