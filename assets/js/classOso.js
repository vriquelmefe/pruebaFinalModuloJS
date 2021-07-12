import Animal from './classAnimal.js';

export default class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido){
    super(nombre, edad, img, comentarios, sonido);
    
  }
  Gruñir() {
    return 'assets/sounds/Gruñido.mp3'
  }
}