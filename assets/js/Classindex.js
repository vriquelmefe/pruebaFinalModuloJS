
class Animal {
  #nombre;
  #edad;
  #img;
  #comentarios;
  #sonido;

  constructor(nombre, edad, img, comentarios, sonido) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#img = img;
    this.#comentarios = comentarios;
    this.#sonido = sonido;
  }

  get Nombre() {
    return this.#nombre;
  }

  get Edad() {
    return this.#edad;
  }

  get Img() {
    return this.#img;
  }

  get Sonido() {
    return this.#sonido;
  }

  set Comentarios(comentarios) {
    this.#comentarios = comentarios;
  }

  get Comentarios() {
    return this.#comentarios;
  }
}

class Leon extends Animal {
  constructor(...args) {
    super(...args);
  }

  Rugir(player) {
    console.log("rooooar");
    player.src = `./assets/sounds/${this.Sonido}`;
    player.load();
    player.play();
  }
}

class Lobo extends Animal {
  constructor(...args) {
    super(...args);
  }

  Aullar() {
    console.log("auuuuuuu");
    player.src = `./assets/sounds/${this.Sonido}`;
    player.load();
    player.play();
  }
}

class Oso extends Animal {
  constructor(...args) {
    super(...args);
  }

  Gruñir() {
    console.log("grrrrrrr");
    player.src = `./assets/sounds/${this.Sonido}`;
    player.load();
    player.play();
  }
}

class Serpiente extends Animal {
  constructor(...args) {
    super(...args);
  }

  Sisear() {
    console.log("zzzzzzzzz");
    player.src = `./assets/sounds/${this.Sonido}`;
    player.load();
    player.play();
  }
}

class Aguila extends Animal {
  constructor(...args) {
    super(...args);
  }

  Chillar() {
    console.log("chrrrchrhchrhchr");
    player.src = `./assets/sounds/${this.Sonido}`;
    player.load();
    player.play();
  }
}
export {Animal, Leon, Lobo, Oso, Serpiente, Aguila}