const relveators = document.querySelectorAll(".relv-animation");

function removeAnimation() {
    if (innerWidth <= 900) {
        relveators.forEach(el => {
            el.classList.forEach(cls => {
                if (cls.split("-")[0] === "revealator") {
                    el.classList.remove(cls);
                }
            })
        });
    }
}

window.onload = removeAnimation;