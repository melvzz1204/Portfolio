const mobileNav = () => {


    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLink = document.querySelectorAll ('.mobile-nav__list');

    let mobileNavOpen = 'false';
    
    headerBtn.addEventListener('click', () => {
    mobileNavOpen = !mobileNavOpen;
    if (mobileNavOpen) {

        mobileNav.style.display = 'flex';
        document.body.style.overflowY = 'hidden';
        
    }
    else {

        mobileNav.style.display = 'none';
        document.body.style.overflowY = 'auto';
        
    }
    });

    mobileLink.forEach (Link =>{

        Link.addEventListener ('click', () => {
            mobileNavOpen = 'false';
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        });

    }); 

};
export default mobileNav;    

