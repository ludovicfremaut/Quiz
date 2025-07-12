export default class Quiz {
  id;
  title;
  description;
  author_id;

  constructor(object) {
    this.id = object.id;
    this.title = object.title;
    this.description = object.description;
    this.author_id = object.author_id;
  }
}
