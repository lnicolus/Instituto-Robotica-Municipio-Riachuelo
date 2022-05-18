let prueba = Array.from(document.querySelectorAll(".galery > div > a"));

const carrusel = new bootstrap.Carousel(`#carouselExampleIndicators`)
for(let i = 0; i < prueba.length; i++){
    prueba[i].onclick = (e) => {
        carrusel.to(i);
    }
}