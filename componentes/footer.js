function footer(el) {
  const footerEl = document.createElement("P");
  footerEl.innerHTML = `
    
    <div class="footer-contenedor">
    <div class="contenedor__wave"> 
    <div class="wave">
    </div>
    </div>
    <h3 class="footer__logo">
      Bandicoot
    </h3>
    <div class="footer__links">
      <div class="link-instagram">
        <p>Instagram</p>
        <i class="fa-brands fa-instagram"></i>
      </div>
      <div class="link-linkedin">
        <p>Linkedin</p>
        <i class="fa-brands fa-linkedin"></i>
      </div>
      <div class="link-gitHub">
        <p>GitHub</p>
        <i class="fa-brands fa-github"></i>
      </div>
    </div>
  </div>
    
    `;
  el.appendChild(footerEl);

  const insta = document.querySelector(".link-instagram");

  insta.addEventListener("click", () => {
    let ass = document.createElement("a");
    ass.target = "_blank";
    ass.href = "https://www.instagram.com/bandicoot1996/?hl=es-la";
    ass.click();
  });

  // const linkedinEl = document.querySelector(".link-linkedin");

  // linkedinEl.addEventListener("click", () => {
  //   let ass = document.createElement("a");
  //   ass.target = "_blank";
  //   ass.href = "";
  //   ass.click();
  // });

  const gitHubEl = document.querySelector(".link-gitHub");
  gitHubEl.addEventListener("click", () => {
    let ass = document.createElement("a");
    ass.target = "_blank";
    ass.href = "https://github.com/Bandiicoot";
    ass.click();
  });
}
