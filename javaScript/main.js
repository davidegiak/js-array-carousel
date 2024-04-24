// recupera i dati che ti servono(img)
let slides = document.getElementsByClassName("img-card");
let nSlides = slides.length;
let slideSelected = 0;
slides[slideSelected].classList.add("active")
// devo far cambiare l'immagine al click del bottone (next)
document.getElementById("next").addEventListener("click", function () {
    slides[slideSelected].classList.remove("active");
    if (slideSelected < nSlides - 1){
        slideSelected++;
    }
    else {
        slideSelected = 0;
    }
    slides[slideSelected].classList.add("active")
})

document.getElementById("previous").addEventListener("click", function () {
    slides[slideSelected].classList.remove("active");
    if (slideSelected > 0){
        slideSelected--;
    }
    else {
        slideSelected = 4;
    }
    slides[slideSelected].classList.add("active")
})



// slides[0].classList.add("active")
// if (slides[0].classList.contains("active")) {
//     slides[0].classList.remove("active")
//     slides[1].classList.add("active")
// }
