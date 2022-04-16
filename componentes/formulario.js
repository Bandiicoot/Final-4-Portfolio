function fomrulario(el) {
  const formularioEl = document.createElement("d");
  formularioEl.innerHTML = `
  <div class="formulario-de-contacto">
  <h2 class="titulo__form">Escribime</h2>
  <div class="contenedor__forms">
    <form action="post" class="formulario" onsubmit="event.preventDefault()">

      <label for="nombre" class="nombre">Nombre</label>
      <input type="text" class="texto" name="nombre" id="nombre" pattern="([a-z A-Z]{4,20})" required />

      <label for="email" class="email nombre">Email</label>
      <input type="email" name="email" id="email" class="email-area texto" required />

      <label for="mensaje" class="mensaje nombre">Mensaje</label>
      <textarea name="mensaje" id="mensaje" cols="30" rows="10"></textarea>

      <button class="boton">Enviar</button>

    </form>
  </div>
</div>
`;

  el.appendChild(formularioEl);

  const form = formularioEl.querySelector(".formulario");
  const nameEl = formularioEl.querySelector("#nombre");
  const emailEl = formularioEl.querySelector("#email");
  const messageEl = formularioEl.querySelector("#mensaje");

  function validationThing(params) {
    if (params.target.checkValidity() == true) {
      params.target.setAttribute("style", "border-color: rgb(163, 240, 30)");
    } else if (params.target.checkValidity() == false) {
      params.target.setAttribute("style", "border-color: rgb(240, 20, 12)");
    }
  }

  nameEl.addEventListener("keydown", (params) => validationThing(params));
  emailEl.addEventListener("keyup", (params) => validationThing(params));

  form.addEventListener("submit", () => {
    const mensaje = {
      to: "fa-ndo@hotmail.com",
      message:
        "Nombre: " +
        nameEl.value +
        "." +
        " " +
        "Email: " +
        emailEl.value +
        " " +
        "Mensaje: " +
        messageEl.value +
        ".",

      //   message: `Nombre: ${nameEl.value}\n Email: ${emailEl.value}\n Mensaje: "${messageEl.value}".`,
    };

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      body: JSON.stringify(mensaje),
      headers: { "content-type": "application/json" },
    }).catch((error) => {
      console.log(error);
    });

    nameEl.value = "";
    emailEl.value = "";
    messageEl.value = "";

    swal("🐲 Un Dragón salvaje aparece! Que haces? 🐉", {
      buttons: {
        cancel: "Correr!",
        catch: {
          text: "Tirar una Pokéball!",
          value: "catch",
        },
        derrotarlo: true,
      },
    }).then((value) => {
      switch (value) {
        case "derrotarlo":
          swal("El Dragón fue vencido! ganaste 500 XP!", "", "success");
          break;

        case "catch":
          swal("Gotcha!", "El Dragón fue atrapado!", "success");
          break;

        default:
          swal("Suerte en la proxima!");
      }
    });
  });
}
