const relveators = document.querySelectorAll(".relv-animation");

function removeAnimationIfNeeded() {
    relveators.forEach(el => {
        const elementCollided = el.getBoundingClientRect();

        if (window.scrollY + innerHeight - 2600 >= elementCollided.bottom) {
            el.classList.forEach(cls => {
                if (cls.split("-")[0] === "revealator") {
                    el.classList.remove(cls);
                }
            });
        }
    });
}


window.onscroll = () => {
    if (window.scrollY >= 300) {
        document.querySelector("#anchor-up").classList.remove("hidden");
    } else {
        document.querySelector("#anchor-up").classList.add("hidden");
    }

    removeAnimationIfNeeded();
}