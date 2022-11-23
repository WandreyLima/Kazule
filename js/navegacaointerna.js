//                  Navegação suave links internos
function initScrollSuave() {
  const linksInterno = document.querySelectorAll('.js-nav a[href^="#"]');

  if (linksInterno.length) {
    function activeSmooth(event) {
      event.preventDefault();
      const href = this.getAttribute("href");
      const section = document.querySelector(href);
      console.log(section);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    linksInterno.forEach((link) => {
      link.addEventListener("click", activeSmooth);
    });
  }
}
initScrollSuave();