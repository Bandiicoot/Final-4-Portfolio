function header(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `<header class="header">
  <a href="index.html">

  <h3  class="header__logo">Bandicoot</h3>
</a>

    
    <div class="bars__menu" aria-expanded="false">
        <span class="line1__bars-menu"></span>
        <span class="line2__bars-menu"></span>
        <span class="line3__bars-menu"></span>
    </div>

    <nav>
  <ul class="primary-navigation" data-visible="false">
    <li>
      <a href="portfolio.html">Portfolio</a>
    </li>
    <li>
      <a href="servicios.html">Servicios</a>
    </li>
    <li>
      <a href="contacto.html">Contacto</a>
    </li>
  </ul>
</nav>

  </header>`;
  el.appendChild(componentEl);

  document.querySelector(".bars__menu").addEventListener("click", animateBars);

  var line1__bars = document.querySelector(".line1__bars-menu");
  var line2__bars = document.querySelector(".line2__bars-menu");
  var line3__bars = document.querySelector(".line3__bars-menu");

  function animateBars() {
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
  }

  const primaryNav = document.querySelector(".primary-navigation");
  const barrasMenu = document.querySelector(".bars__menu");

  barrasMenu.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
      primaryNav.setAttribute("data-visible", true);
      barrasMenu.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
      primaryNav.setAttribute("data-visible", false);
      barrasMenu.setAttribute("aria-expanded", false);
    }
  });
}
