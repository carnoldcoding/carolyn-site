import './index.css'

const mobileNav = {
    isOpen: false,
    element: document.querySelector('#mobile-nav') as HTMLElement,
    icon: document.querySelector('#mobile-nav-icon') as HTMLHtmlElement,
    toggle: function() {
        this.isOpen = this.isOpen ? false : true;
    }
};

window.addEventListener('click', (e: MouseEvent)=> {
    const target = e.target as HTMLElement;
    console.log(target.classList)
    if(target.id == "mobile-nav-icon" || target.id == "mobile-nav" || Array.from(target.classList).includes('nav-item')){
        mobileNav.toggle();
        if(mobileNav.isOpen){
            mobileNav.element.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }else if(!mobileNav.isOpen){
            mobileNav.element.style.display = 'none';
            document.body.style.overflow = 'unset';
        }
    }
    
})