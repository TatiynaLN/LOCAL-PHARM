export default function mobileMenu() {

    if (document.getElementById('menu__button')) {
        const hamburger = document.getElementById('menu__button');
        const mobileMenu = document.querySelector('.nav-catalog');
        const mobileMenuItems = document.querySelectorAll('.menu-item');
        // const htmlElement = document.getElementsByTagName('html')[0];

        const body = document.body;
        let screenWidth = window.innerWidth;

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('nav-catalog--active');
            // body.classList.toggle('no-scroll');
            // htmlElement.classList.toggle('no-scroll');
        });

        window.addEventListener('resize', () => {
            screenWidth = window.innerWidth;

            if (screenWidth >= 50) {
                linksClick();
            }

            if (screenWidth >= 50) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('.nav-catalog--active');
                // body.classList.remove('no-scroll');
                // htmlElement.classList.remove('no-scroll');
            }
        });

        function linksClick() {
            mobileMenuItems.forEach(link => {
                link.addEventListener('click', (e) => {
                    if (screenWidth > 50) {
                        hamburger.classList.remove('active');
                        mobileMenu.classList.remove('nav-catalog--active');
                        // body.classList.remove('no-scroll');
                        // htmlElement.classList.remove('no-scroll');
                    }
                });
            });
        }
        linksClick();
    }
}
