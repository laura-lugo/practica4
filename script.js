const hambuguesa = documet.queryselector(".hamburguesa");
const navMenu = document.querySelector(".nav-menu");


hamburguesa.addEventListener("click", function(){
    hamnburguesa.classlist.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(function (close) {
    close.addEventListener("click", function() {
        hambuguesa.classList.remove("active");
        navMenu.classList.remove("active");
    })
})
