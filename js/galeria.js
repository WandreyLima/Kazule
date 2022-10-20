let imagens = document.querySelectorAll(".galeria-card");
let modal = document.querySelector(".modal");
let modalImg = document.querySelector("#modal-img");
let btnClose = document.querySelector("#btn-close");
let srcVal; // Armazenar o src da nossa imagem

for (let i = 0; i < imagens.length; i++) {
  // Para cada imagem na posição i, adicionar o evento click com a function
  imagens[i].addEventListener("click", function () {
    srcVal = imagens[i].getAttribute("src"); // Pega o src de cada imagem em i
    modalImg.setAttribute("src", srcVal); // recebe o valor do src pegado acima
    modal.classList.toggle("modal_active"); //muda pra classe moda_active que tem o objetivo de mudar o visible do elemento
  });
}

btnClose.addEventListener("click", function () {
  modal.classList.toggle("modal_active");
});

document.body.addEventListener("keyup", function (e) {
  if (e.key === 'Escape') {
    modal.classList.remove("modal_active");
  }
});
