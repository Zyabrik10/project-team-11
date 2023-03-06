window.onscroll = () => {
    if (window.scrollY >= 300) {
        document.querySelector("#anchor-up").classList.remove("hidden");
    } else {
        document.querySelector("#anchor-up").classList.add("hidden");
    }
}