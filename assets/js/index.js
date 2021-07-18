import {Animal, Leon, Lobo, Oso, Serpiente, Aguila} from './Classindex.js'

(async function () {
  const animalElement = document.getElementById("animal");
  const edadElement = document.getElementById("edad");
  const comentariosElement = document.getElementById("comentarios");
  const previewElement = document.getElementById("preview");
  const btnRegistrarElement = document.getElementById("btnRegistrar");

  const playerElement = document.getElementById("player");

  const TarjetitasDeAnimales = [];

  let Animales;
  //let Animales = undefined;
  try {
    const Request = await fetch("/animales.json");
    const ParsedRequest = await Request.json();

    //  const {json} = await fetch("/animales.json");
    //  const ParsedRequest = await json();

    //  const Request = await fetch("/animales.json");
    // const { animales } = await Request.json();

    Animales = ParsedRequest.animales;
  } catch (e) {
    console.error(e);
    Animales = [];
  }

  function actualizarVista() {
    const zonaDeTarjetasElement = document.querySelector(".zona-de-tarjetas");

    /**
     * borrar todas las tarjetas que habian antes de agregar denuevo las tarjetas
     */
    zonaDeTarjetasElement.innerHTML = "";

    /**
     * vamos animal por animal agregando las tarjetas al DOM
     */
    TarjetitasDeAnimales.forEach((animal) => {
      const DIVCard = document.createElement("div");
      const DIVFoto = document.createElement("div");
      const DIVBoton = document.createElement("div");

      DIVCard.classList.add("card", "text-white", "bg-secondary");
      DIVCard.style.width = "200px";

      DIVFoto.innerHTML = `<img class="card-img-top" src="./assets/imgs/${animal.Img}" />`;

      DIVBoton.classList.add("card-body", "p-0");
      DIVBoton.innerHTML = `
        <a href="#" class="btn btn-primary">
          <img class="p-1" src="./assets/imgs/audio.svg" style="width: 50px" />
        </a>`;

      DIVFoto.addEventListener("click", () => {
        $("#modal").modal("show");
        console.log(animal);
        const modalBody = document.getElementById("modal-body");
        modalBody.innerHTML = `
        <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>  
      <h5 class="modal-title" id="exampleModalLabel">${animal.Nombre}</h5>   
      <hr>
      <img src="./assets/imgs/${animal.Img}" style="width: 500px" class="img-fluid"/>
      <hr>
      <h5>Edad</h5>
      <p>${animal.Edad}</p>
      <hr>
      <h5>Comentarios</h5>
      <p class="mb-0">${animal.Comentarios}</p>
        `;
      });

      DIVBoton.addEventListener("click", () => {
        if (animal.Nombre === "Leon") {
          animal.Rugir(playerElement);
        } else if (animal.Nombre === "Lobo") {
          animal.Aullar(playerElement);
        } else if (animal.Nombre === "Oso") {
          animal.Aullar(playerElement);
        }
        else if (animal.Nombre === "Serpiente") {
          animal.Aullar(playerElement);
        }
        else if (animal.Nombre === "Aguila") {
          animal.Aullar(playerElement);
        } else { 
          alert('Esto no esta funcionando, tu animal no esta reconocido')
        }
      });

      DIVCard.appendChild(DIVFoto);
      DIVCard.appendChild(DIVBoton);

      zonaDeTarjetasElement.appendChild(DIVCard);
    });
  }

  animalElement.addEventListener("change", (event) => {
    // console.log({ event });
    const nombreDelAnimalElegido = animalElement.value;

    const animalEncontrado = Animales.find(
      (animal) => animal.name === nombreDelAnimalElegido
    );

    previewElement.setAttribute(
      "src",
      `./assets/imgs/${animalEncontrado.imagen}`
    );
  });

  btnRegistrarElement.addEventListener("click", () => {
    let nombre = animalElement.value;
    let edad = edadElement.value;
    let comentarios = comentariosElement.value;

    const { imagen, sonido } = Animales.find(
      (animal) => animal.name === nombre
    );

    switch (nombre) {
      case "Leon":
        {
          const leoncio = new Leon(nombre, edad, imagen, comentarios, sonido);
          TarjetitasDeAnimales.push(leoncio);
        }
        break;

      case "Lobo":
        {
          const lobito = new Lobo(nombre, edad, imagen, comentarios, sonido);
          TarjetitasDeAnimales.push(lobito);
        }
        break;

      case "Oso":
        {
          const osito = new Oso(nombre, edad, imagen, comentarios, sonido);
          TarjetitasDeAnimales.push(osito);
        }
        break;

      case "Aguila":
        {
          const aguilita = new Aguila(
            nombre,
            edad,
            imagen,
            comentarios,
            sonido
          );
          TarjetitasDeAnimales.push(aguilita);
        }
        break;

      case "Serpiente":
        {
          const serpientechiquitita = new Serpiente(
            nombre,
            edad,
            imagen,
            comentarios,
            sonido
          );
          TarjetitasDeAnimales.push(serpientechiquitita);
        }
        break;
    }

    console.log(TarjetitasDeAnimales);

    actualizarVista();
  });
})();