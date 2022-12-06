// Animação ao usar o Scroll

function initAnimaScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  const windowClient = window.innerHeight * 0.7;

  if (sections.length) {
    function animacaoScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisibile = sectionTop - windowClient < 0;
        if (isSectionVisibile) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
    }

    window.addEventListener("scroll", animacaoScroll);
  }
}

initAnimaScroll()