function carrusel(el) {
  const carruselEl = document.createElement("c");
  carruselEl.innerHTML = `
  <div class="contenedor-ruletaTemp"></div>
  <!--  <template id="portfolio-template">  -->
  
  <body>
  <div class="contenedor-ruleta">
    <div id="drag-container">
      <div id="spin-container">
        <img
          src="./portfolio.png"
          alt=""
          class="bandicoot__img"
        />
    
        <img
        src="./final3.png"
        alt=""
        class="foto2"
      />

      <img
        src="./buscador.png"
        alt=""
        class="foto3"
      />

      <img
        src="./form.png"
        alt=""
        class="foto4"
      />

        <!-- Texto en el centro -->
        <p>Bienvenidos a mi Portfolio</p>
      </div>
      <div id="ground"></div>
    </div>
  </div>
</body>
<!-- </template>  -->
    `;
  el.appendChild(carruselEl);
  // Aca se pueden cambiar algunos valores generales
  var radius = 260;
  var autoRotate = true;
  var rotateSpeed = -60;
  var imgWidth = 420;
  var imgHeight = 360;

  setTimeout(init, 1000);

  var odrag = document.getElementById("drag-container");
  var ospin = document.getElementById("spin-container");
  var aImg = ospin.getElementsByTagName("img");
  var aVid = ospin.getElementsByTagName("video");
  var aEle = [...aImg, ...aVid];

  ospin.style.width = imgWidth + "px";
  ospin.style.height = imgHeight + "px";

  var ground = document.getElementById("ground");
  ground.style.width = radius * 1 + "px";
  ground.style.height = radius * 1 + "px";

  function init(delayTime) {
    for (var i = 0; i < aEle.length; i++) {
      aEle[i].style.transform =
        "rotateY(" +
        i * (360 / aEle.length) +
        "deg) translateZ(" +
        radius +
        "px)";
      aEle[i].style.transition = "transform 1s";
      aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
    }
  }

  function applyTranform(obj) {
    if (tY > 180) tY = 180;
    if (tY < 0) tY = 0;

    obj.style.transform = "rotateX(" + -tY + "deg) rotateY(" + tX + "deg)";
  }

  var sX,
    sY,
    nX,
    nY,
    desX = 0,
    desY = 0,
    tX = 0,
    tY = 10;

  // auto spin
  if (autoRotate) {
    var animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
    ospin.style.animation = `${animationName} ${Math.abs(
      rotateSpeed
    )}s infinite linear`;
  }

  // Esto es para poder mover la ruleta a gusto con el mouse
  document.onpointerdown = function (e) {
    clearInterval(odrag.timer);
    e = e || window.event;
    var sX = e.clientX,
      sY = e.clientY;

    this.onpointermove = function (e) {
      e = e || window.event;
      var nX = e.clientX,
        nY = e.clientY;
      desX = nX - sX;
      desY = nY - sY;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(odrag);
      sX = nX;
      sY = nY;
    };

    this.onpointerup = function (e) {
      odrag.timer = setInterval(function () {
        desX *= 0.95;
        desY *= 0.95;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTranform(odrag);
        playSpin(false);
        if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
          clearInterval(odrag.timer);
          playSpin(true);
        }
      }, 17);
      this.onpointermove = this.onpointerup = null;
    };

    return false;
  };

  /// Aca arranco a tratar de hacer funcionar los clicks en las imagenes

  const bandi = document.querySelector(".bandicoot__img");

  console.log(bandi);
  bandi.addEventListener("click", () => {
    //Primera forma de lograrlo

    //  window.open(
    //    "https://www.youtube.com/watch?v=Z8wYKVPXF3Q&t=40s",
    //  "_blank" // <- Esto es lo que hace que se habra en una nueva pestaña.
    //  );
    //  console.log(bandi);

    //Segunda forma de hacer que habra en otra pestaña.

    let ass = document.createElement("a");
    ass.className = "bandiLink";
    ass.target = "_blank";
    ass.href = "https://bandiicoot.github.io/Portfolio-beta/";
    ass.click();

    // window.location.href = "https://www.google.com/"; <-Tambien funca esto, pero sin mandarte a otra pestaña.
  });

  const foto2 = document.querySelector(".foto2");

  foto2.addEventListener("click", () => {
    let ass = document.createElement("a");
    ass.className = "bandiLink2";
    ass.target = "_blank";
    ass.href = " https://bandiicoot.github.io/Pagina-final-mod-3/";
    ass.click();
  });

  const foto3 = document.querySelector(".foto3");

  foto3.addEventListener("click", () => {
    let ass = document.createElement("a");
    ass.className = "bandiLink3";
    ass.target = "_blank";
    ass.href = "https://bandiicoot.github.io/Buscador-marcadoLibre/";
    ass.click();
  });

  const foto4 = document.querySelector(".foto4");

  foto4.addEventListener("click", () => {
    let ass = document.createElement("a");
    ass.className = "bandiLink4";
    ass.target = "_blank";
    ass.href = " https://bandiicoot.github.io/new-form/";
    ass.click();
  });
}
