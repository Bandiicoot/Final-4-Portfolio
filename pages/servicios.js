function addWorkCard(params = {}) {
  const template = document.querySelector("#servicios1-template");
  const contenedor = document.querySelector(".contenedor-de-cards");
  template.content.querySelector(".card-subtitle").textContent = params.title;
  template.content.querySelector(".card__img").src = params.image;
  template.content.querySelector(".card-text").textContent = params.descripcion;
  // template.content.querySelector(".card-link").href = params.url;

  const clone = document.importNode(template.content, true);
  contenedor.appendChild(clone);
}

function getWorks() {
  return fetch(
    "https://cdn.contentful.com/spaces/b8btg7kqes7l/environments/master/entries?access_token=urZv1ThIopPc-FIwI4vTFL-EP0jIWojllDZ2FZgh6jI&&content_type=serviciosIndex"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const fieldsCollections = data.items.map((item) => {
        const imgId = item.fields.imagen.sys.id;
        const img = getImgW(imgId, data);
        return {
          title: item.fields.titulo,
          descripcion: item.fields.descripcion,
          url: item.fields.url,
          image: img.fields.file.url,
        };
      });
      return fieldsCollections;
    });
}

function getImgW(id, data) {
  return data.includes.Asset.find((i) => {
    return i.sys.id == id;
  });
}

function main() {
  container = document.querySelector(".header-servicios");
  header(container);

  containerFooter = document.querySelector(".footer-servicios");
  footer(containerFooter);

  getWorks().then((works) => {
    for (const w of works) {
      addWorkCard(w);
    }
  });
}

main();
