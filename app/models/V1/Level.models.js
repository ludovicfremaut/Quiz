export default class Level {
  // On déclare les propriétés de la classe Level
  id;
  name;

  constructor(object) {
    this.id = object.id;
    this.name = object.name;
  }
}
