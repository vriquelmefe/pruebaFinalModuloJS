import Animal from './classAnimal.js';

export default class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios, sonido){
    super(nombre, edad, img, comentarios, sonido);
    
  }
  Aullar() {}
}