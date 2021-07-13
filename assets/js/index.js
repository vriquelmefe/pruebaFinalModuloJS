import Animal from './classAnimal.js';
import Leon from './classLeon.js';
import Lobo from './classLobo.js';
import Oso from './classOso.js';
import Serpiente from './classSerpiente.js';
import Aguila from './classAguila.js';

const seleccionAnimal = document.getElementById('animal');
const imagenPreviewAnimal = document.getElementById('imagenAnimal');
const sonidoAnimal = document.getElementById('sonidoAnimal');
const arregloAnimalesCard = [];
const edad = document.getElementById('edad').value;
const comentario = document.getElementById('comentarios').value;
const img = imagenPreviewAnimal.src.seleccionandoImagen;

const registro = (event) => {

  event.preventDefault(); 
  
  //const tarjetaImagenAgregada = document.getElementById('imagenCard')
  
  async function enviarResultado () {
    const animales = document.getElementById('Animales') //aqui van cargadas las imagenes del animal registrado   
    const sonidoAnimal = await getSonidos(baseURL, seleccionAnimal.value);
    console.log(sonidoAnimal.sonido)
    arregloAnimalesCard.push( `
    <div id="cardAgregada-${seleccionAnimal.value}" class="card col-4 border-0 m-2">
    <img id="imagenCard" src="${imagenPreviewAnimal.src}" class="w-100" alt="...">
    <div class="card-body">
    <audio  class=" w-100" controls id="sonidoAnimal" src="assets/sounds/${sonidoAnimal.sonido}">
    </audio>
    </div>
    </div>
    `)
    animales.innerHTML = arregloAnimalesCard.join(' ')
  }
    if (seleccionAnimal === 'Leon') {
      const leon = new Leon(seleccionAnimal, edad, img, comentario, sonidoAnimal);
      enviarResultado(leon);
  
    } else if (seleccionAnimal === 'Lobo') {
      const lobo = new Lobo(seleccionAnimal, edad, img, comentario, sonidoAnimal);
      enviarResultado(lobo);
    } else if (seleccionAnimal === 'Oso') {
      const oso = new Oso(seleccionAnimal, edad, img, comentario, sonidoAnimal);
      enviarResultado(oso);
    } else if (seleccionAnimal === 'Serpiente') {
      const serpiente = new Serpiente(seleccionAnimal, edad, img, comentario, sonidoAnimal);
      enviarResultado(serpiente);
    } else {
      const aguila = new Aguila(seleccionAnimal, edad, img, comentario, sonidoAnimal);
      enviarResultado(aguila);
    }
  //dejo el formulario de ingreso vacio
  document.getElementById('animal').value = "Seleccione un animal";
  document.getElementById('edad').value = "";
  document.getElementById('comentarios').value = "";
  document.getElementById('imagenAnimal').src = "";
}

//tomo el evento click del boton registrar
btnRegistrar.addEventListener('click', registro);

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
const seleccionandoImagen = (nombreAnimal) => {
  Promise.all([getImagen(baseURL, nombreAnimal)
    .then(response => {
      imagenPreviewAnimal.setAttribute("src", `assets/imgs/${response.imagen}`);
      console.log('funciona retorno imagen')
      })
    .catch(err => console.log('err' , err))
  ])
}
seleccionAnimal.addEventListener('change', () => {
  seleccionandoImagen(seleccionAnimal.value)
})

const seleccionandoSonido = (nombreAnimal) => {
  Promise([getSonidos(baseURL, nombreAnimal)
    .then(response => {
      sonidoAnimal.setAttribute("src", `assets/sounds/${response.sonido}`);
      console.log('el sonido igual')
      })
    .catch(err => console.log('err' , err))
  ])
}

// const instancias = () => {
//   const lion = new Leon(seleccionAnimal, edad, img, comentario, audio);
//   const wolf = new Lobo(seleccionAnimal, edad, img, comentario, audio);
//   const bear = new Oso(seleccionAnimal, edad, img, comentario, audio);
//   const snake = new Serpiente(seleccionAnimal, edad, img, comentario, audio);
//   const bird = new Aguila(seleccionAnimal, edad, img, comentario, audio);
// }


