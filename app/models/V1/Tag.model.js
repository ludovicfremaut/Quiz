export default class Tag {
    // Propriétés
    id;
    name;

    // Constructeur
    // On récupérera un objet avec des propriétés
    // qu'on assignera à notre instance de classe
    constructor(object) {
        this.id = object.id;
        this.name = object.name;
    }

}