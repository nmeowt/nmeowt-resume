if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {
    // declare
    const menuBtn = document.getElementById('menu-btn');
    const navLink = document.getElementsByClassName('nav-link');
    const roundedProgress = document.getElementsByClassName('rounded-progress');

    // add event listener
    menuBtn.addEventListener('click', onClickMenuBtn);
    for (let i = 0; i < navLink.length; i++) {
        navLink[i].addEventListener('click', onClickNavLink);
    }
    for (let i = 0; i < roundedProgress.length; i++) {
        const progress = roundedProgress[i].querySelectorAll(':scope > .progress');
        onChangeProgress(progress);
    }
}

const onClickMenuBtn = (event) => {
    const classList = event.target.classList;
    const mobileHeader = document.getElementsByClassName('mobile-header')[0];
    const desktopHeader = document.getElementsByClassName('desktop-header')[0];
    const mainContent = document.getElementsByClassName('content')[0];
    if (classList.contains('ion-navicon-round')) {
        desktopHeader.classList.add('open');
        mainContent.classList.add('open');
        mobileHeader.classList.add('open');
        classList.remove('ion-navicon-round');
        classList.add('ion-close-round');
    } else {
        desktopHeader.classList.remove('open');
        mainContent.classList.remove('open');
        mobileHeader.classList.remove('open');
        classList.add('ion-navicon-round');
        classList.remove('ion-close-round');
    }
}

const onClickNavLink = (event) => {
    const active = document.getElementsByClassName('active');
    if (!event.target.classList.contains('active')) {
        active[0].classList.remove('active');
        event.target.classList.add('active');
    }
}

const onChangeProgress = (progress) => {
    let value = progress[0].getAttribute('data-value');
    let left = progress[0].children[0].querySelector('span');
    let right = progress[0].children[1].querySelector('span');
    if (value > 0) {
        if (value <= 50) {
            right.style.transform = 'rotate(' + percentageToDegrees(value) + 'deg)';
        } else {
            right.style.transform = 'rotate(180deg)';
            left.style.transform = 'rotate(' + percentageToDegrees(value - 50) + 'deg)';
        }
    }
}

const percentageToDegrees = (percentage) => {
    return percentage / 100 * 360
}