export default class Quiz {
// Propriétés
    id;
    title;
    description;
    author_id;

    // Constructeur
    constructor(object) {
        this.id = object.id;
        this.title = object.title;
        this.description = object.description;
        this.author_id = object.author_id;
    }

}