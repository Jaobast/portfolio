const buttonNext = document.querySelectorAll("#next a");

buttonNext.forEach(el => {
    const name = el.querySelector("p");

    el.addEventListener("mouseenter", () => {
        el.classList.add("a-overlay");
        name.classList.remove("hidden");
        name.classList.add("p-animation");
    });

    el.addEventListener("mouseleave", () => {
        el.classList.remove("a-overlay");
        name.classList.add("hidden");
        name.classList.remove("p-animation");
    });
});