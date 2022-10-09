const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll(".counter");
let scrollStarted = false;

btn.addEventListener('click', toggleMenu);
document.addEventListener('scroll', scrollPage);

function toggleMenu() {
    btn.classList.toggle("open");
    overlay.classList.toggle("overlay-show");
    document.body.classList.toggle("no-scroll")
    menu.classList.toggle("show-menu")
}

function countUp() {
    counters.forEach((counter) => {
        counter.innerText = "0";

        const updateCounter = () => {
            // get target value
            const targetValue = +counter.getAttribute("data-target");

            // get current value
            const currValue = +counter.innerText;

            //create increment
            const increment = targetValue / 100;

            //if counter is less than target, add increment
            if (currValue < targetValue) {
                //round up and set counter value
                counter.innerText = `${Math.ceil(currValue + increment)}`

                setTimeout(updateCounter, 75);
            } else {
                counter.innerText = targetValue;
            }
        }

        updateCounter();
    });
}

function resetCounter() {
    counters.forEach(counter => counter.innerText = "0");
}

function scrollPage() {
    const scrollPos = window.scrollY;
    if (scrollPos > 100 && !scrollStarted) {
        countUp();
        scrollStarted = true;
    } else if (scrollPos < 100 && scrollStarted) {
        resetCounter();
        scrollStarted = false;
    }
}
