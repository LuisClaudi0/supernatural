const imgs = document.getElementById('img');
const img = document.querySelectorAll('#img img');

let idx = 0;

function carousel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 100}%)`;
}

function reverseCarousel() {
    idx--;

    if (idx < 0) {
        idx = img.length - 1;
    }

    imgs.style.transform = `translateX(${-idx * 100}%)`;
}


let right = document.getElementById('right');
let left = document.getElementById('left');


right.addEventListener('click', function(){
    carousel();
});

left.addEventListener('click', function(){
    reverseCarousel();
});


let about = document.getElementById('img');
let texts = document.querySelectorAll('.container__text');
let imagens = document.querySelectorAll('.container__img');

about.addEventListener('click', function(){
    texts.forEach(function(text) {
        text.classList.toggle('none');
    });

    imagens.forEach(function(imagem) {
        imagem.classList.toggle('img__opa');
    });
});