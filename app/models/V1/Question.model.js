export default class Question {
//* Propriétés
    id;
    description;
    anecdote;
    wiki;
    level_id;
    quiz_id;

    //* Constructeur
    constructor(obj) {
        this.id = obj.id;
        this.description = obj.description;
        this.anecdote = obj.anecdote;
        this.wiki = obj.wiki;
        this.level_id = obj.level_id;
        this.quiz_id = obj.quiz_id;
    }

}