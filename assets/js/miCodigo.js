// import Leon from './classLeon.js';
// import Lobo from './classLobo.js';
// import Oso from './classOso.js';
// import Serpiente from './classSerpiente.js';
// import Aguila from './classAguila.js';

import {Leon, Lobo, Oso, Serpiente, Aguila} from './animalitos.js';

const seleccionAnimal = document.getElementById('animal');
const imagenPreviewAnimal = document.getElementById('imagenAnimal');
const sonidoAnimal = document.getElementById('sonidoAnimal');
const arregloAnimalesCard = [];
const edad = document.getElementById('edad');
const comentario = document.getElementById('comentarios');
const img = imagenPreviewAnimal.src;

const registro = (event) => {
  event.preventDefault(); 
  async function enviarResultado () {
    const animales = document.getElementById('Animales') //aqui van cargadas las imagenes del animal registrado   
    const sonidoAnimal = await getSonidos(baseURL, seleccionAnimal.value);
    let i;
    console.log(sonidoAnimal.sonido)
    arregloAnimalesCard.push( `
    <div id="cardAgregada-${seleccionAnimal.value}" class="card col-4 border-0 m-2 bg-secondary">
    <img id="imagenCard" src="${imagenPreviewAnimal.src}" class="w-100" alt="..." data-bs-toggle="modal" data-bs-target="#${seleccionAnimal.value}">
    <div class="card-body">
    <audio  class="w-100" controls id="sonidoAnimal" src="assets/sounds/${sonidoAnimal.sonido}">
    </audio>
    </div>
    </div>
    `)
    animales.innerHTML = arregloAnimalesCard.join(' ')
    imagenCard.addEventListener("click", modalClick(seleccionAnimal.value));
  }
  
 
    if (seleccionAnimal.value === 'Leon') {
      const leon = new Leon(seleccionAnimal.value, edad.value, img, comentario.value, sonidoAnimal);
      enviarResultado(leon);
  
    } else if (seleccionAnimal.value === 'Lobo') {
      const lobo = new Lobo(seleccionAnimal.value, edad.value, img, comentario.value, sonidoAnimal);
      enviarResultado(lobo);
    } else if (seleccionAnimal.value === 'Oso') {
      const oso = new Oso(seleccionAnimal.value, edad.value, img, comentario.value, sonidoAnimal);
      enviarResultado(oso);
    } else if (seleccionAnimal.value === 'Serpiente') {
      const serpiente = new Serpiente(seleccionAnimal.value, edad.value, img, comentario.value, sonidoAnimal);
      enviarResultado(serpiente);
    } else  if (seleccionAnimal.value === 'Aguila' ){
      const aguila = new Aguila(seleccionAnimal.value, edad.value, img, comentario.value, sonidoAnimal);
      enviarResultado(aguila);
     }else {
       alert ('falta algo')
     }
  // //  IFE 
  // // dejo el formulario de ingreso vacio
  //  (() => {
  //    document.getElementById('animal').value = "";
  //    document.getElementById('edad').value = "";
  //    document.getElementById('comentarios').value = "";
  //    //document.getElementById('imagenAnimal').src = "";
  //  })();
  
}
//tomo el evento click del boton registrar
btnRegistrar.addEventListener('click', registro);

seleccionAnimal.addEventListener('change', () => {
  seleccionandoImagen(seleccionAnimal.value)
})
const seleccionandoImagen = (nombreAnimal) => {
  Promise.all([getImagen(baseURL, nombreAnimal)
    .then(response => {
      imagenPreviewAnimal.setAttribute("src", `assets/imgs/${response.imagen}`);
      console.log('funciona retorno imagen')
      })
    .catch(err => console.log('err' , err))
  ])
}
//json animales
const baseURL = './animales.json';
const request = async (url) => {
  const response = await fetch(url);
  const datos = await response.json();
  return datos
}
const getImagen = async (baseURL, nombreAnimal) => {
  const url = await request(baseURL);
  const todosLosAnimales = url.animales;
  const imagenDelAnimal = todosLosAnimales.find(record => record.name === nombreAnimal)
  if(imagenDelAnimal){
    return {imagen: imagenDelAnimal.imagen}
  }else{
    return {}
  }
}
const getSonidos = async (baseURL, nombreAnimal) => {
  const url = await request(baseURL);
  const todosLosAnimales = url.animales;
  const sonidoDelAnimal = todosLosAnimales.find(record => record.name === nombreAnimal)
  if(sonidoDelAnimal){
    return {sonido: sonidoDelAnimal.sonido}
  }else{
    return {}
  }
}

//creacion modal
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");

function openModalWith(something) {
  modalBody.innerHTML = something;
  $(modal).modal("show");
}  
function modalClick(animal) {
  
const edad = document.getElementById('edad');  
const comentario = document.getElementById('comentarios');
  return function (event) {
    openModalWith(`
      <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>  
      <h5 class="modal-title" id="exampleModalLabel">${animal}</h5>   
      <hr>
      <img src="${imagenPreviewAnimal.src}" class="img-fluid">
      <hr>
      <h5>Edad</h5>
      <p>${edad.value}</p>
      <hr>
      <h5>Comentarios</h5>
      <p class="mb-0">${comentario.value}</p>     
    `);  
  };  
}  
