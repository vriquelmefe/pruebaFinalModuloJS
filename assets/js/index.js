import Animal from './classAnimal.js';
import Leon from './classLeon.js';
import Lobo from './classLobo.js';
import Oso from './classOso.js';
import Serpiente from './classSerpiente.js';
import Aguila from './classAguila.js';

const tabla = document.getElementById('Tabla');
const seleccionAnimal = document.getElementById('animal');
const audio = document.getElementById('player');
const imagenPreviewAnimal = document.getElementById('imagenAnimal');

const registro = (event) => {
  event.preventDefault(); 
  const edad = document.getElementById('edad').value;
  const comentario = document.getElementById('comentarios').value;
  const img = imagenPreviewAnimal.src;
  const animalito = new Animal(seleccionAnimal, edad, img, comentario, audio);
  function enviarResultado() {
     const animales = document.getElementById('Animales') //aqui van cargadas las imagenes del animal registrado
      animales.innerHTML = `
        <div id="cardAgregada" class="card" style="width: 18rem;">
        <img id="imagenCard" src="${img}" class="card-img-top" alt="...">
        <div class="card-body">
        <button ><i class="fas fa-volume-up fa-2x"></i></button>
        </div>
      </div>
     `
  }
  //IIFE creadora de instancias
  (() => {
    if (seleccionAnimal === 'Leon') {
      const leon = animalito;
      enviarResultado(leon);
  
    } else if (seleccionAnimal === 'Lobo') {
      const lobo = animalito;
      enviarResultado(lobo);
    } else if (seleccionAnimal === 'Oso') {
      const oso = animalito;
      enviarResultado(oso);
    } else if (seleccionAnimal === 'Serpiente') {
      const serpiente = animalito;
      enviarResultado(serpiente);
    } else {
      const aguila = animalito;
      enviarResultado(aguila);
    }
  })();
  

  document.getElementById('animal').value = "";
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
      })
    .catch(err => console.log('err' , err))
  ])
}
seleccionAnimal.addEventListener('change', () => {
  seleccionandoImagen(seleccionAnimal.value)
})


/* etiqueta de audio 

<audio src="/test/audio.ogg">
<p>Tu navegador no implementa el elemento audio.</p>
</audio>

**/

 // // document.getElementById('propietario').value = "";
  // // document.getElementById('telefono').value = "";
  // // document.getElementById('direccion').value = "";
  // // document.getElementById('nombreMascota').value = "";
  // // document.getElementById('enfermedad').value = "";
  // // document.getElementById('tipo').value = "";