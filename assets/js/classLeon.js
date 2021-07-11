import Animal from './classAnimal.js';
export default class Leon extends Animal{
  constructor(nombre, edad, img, comentarios, sonido){
    super(nombre, edad, img, comentarios, sonido);
    
  }
  rugir()  {
    return 'aaarg';
  }
}