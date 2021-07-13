import Animal from './classAnimal.js';

export default class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonido){
    super(nombre, edad, img, comentarios, sonido);
    
  }
  Chillar() {
    return 'assets/sounds/Chillido.mp3'
  }
}