function buttonUp(el) {
  const buttonUpEl = document.createElement("b");
  buttonUpEl.innerHTML = `
<div class="buttonUp">
<i class="fa-solid fa-jet-fighter-up"></i>
</div>
`;
  el.appendChild(buttonUpEl);

  document.querySelector(".buttonUp").addEventListener("click", scrollUp);

  function scrollUp() {
    const currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(scrollUp);
      window.scrollTo(0, currentScroll - currentScroll / 20);
    }
  }

  const button = document.querySelector(".buttonUp");

  window.onscroll = function () {
    const scroll = document.documentElement.scrollTop;
    if (scroll > 500) {
      button.style.transform = "scale(1)";
    } else if (scroll < 500) {
      button.style.transform = "scale(0)";
    }
  };
}
