// recupera i dati che ti servono(img)
let slides = document.getElementsByClassName("img-card");
let attiva = document.getElementsByClassName("active");
let nonAttiva = document.getElementsByClassName("none");
let nSlides = slides.length;

// devo far cambiare l'immagine
slides[0].classList.add("active")
if (slides[0].classList.contains("active")) {
    slides[0].classList.remove("active")
    slides[1].classList.add("active")
}
