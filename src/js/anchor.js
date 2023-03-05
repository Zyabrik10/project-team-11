window.onscroll = () => {
    if (window.scrollY >= 300) {
        document.querySelector(".anchor").classList.remove("hidden");
    } else {
        document.querySelector(".anchor").classList.add("hidden");
    }
}