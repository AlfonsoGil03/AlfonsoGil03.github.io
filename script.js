// Animación sencilla al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".cv").style.opacity = 0;
    setTimeout(() => {
        document.querySelector(".cv").style.transition = "opacity 1.5s";
        document.querySelector(".cv").style.opacity = 1;
    }, 100);
});
