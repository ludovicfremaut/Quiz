export default class Answer {

    id;
    description;
    question_id;
    is_valid;

    constructor(object) {
        this.id = object.id;
        this.description = object.description;
        this.question_id = object.question_id;
        this.is_valid = object.is_valid;
    }

    // Utile uniquement en privé
    // get id() {
    //     return this.#id;
    // }

    // get description() {
    //     return this.#description;
    // }

    // get question_id() {
    //     return this.#question_id;
    // }

    // get is_valid() {
    //     return this.#is_valid;
    // }

    // set id(value) {
    //     if (isNaN(Number(value) || typeof value !== undefined)) {
    //         throw new Error("Answer.id doit être de type entier");
    //     }
    //     this.#id = value;
    // }

    // set description(value) {
    //     if(value !== "string") {
    //         throw new Error("Answer.description n'est pas une chaine de caractères");
    //     }
    //     this.#description = value;
    // }

    // set question_id(value) {
    //     if (isNaN(Number(value))) {
    //         throw new Error ("Answer.question_id n'est pas un nombre");
    //     }
    //     this.#question_id = value;
    // }

    // set is_valid(value) {
    //     if (value !== Boolean) {
    //         throw new Error ("Answer.is_valid n'est pas un booléen");
    //     }
    //     this.#is_valid = value;
    // }
}