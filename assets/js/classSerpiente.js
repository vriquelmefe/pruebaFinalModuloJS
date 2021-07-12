import Animal from './classAnimal.js';

export default class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonido){
    super(nombre, edad, img, comentarios, sonido);
    
  }
  Sisear() {
    return 'assets/sounds/Siseo.mp3'
  }
}