import Answer from './Answer.model.js';
import Tag from './Tag.model.js';
import Question from './Question.model.js';
import Level from './Level.model.js';
import User from './User.model.js';
import Quiz from './Quiz.model.js';

// Question <=> Answer

Question.hasMany(Answer, {
    as: "answers",
    foreignKey: "question_id",
});

Answer.belongsTo(Question, {
    as: "questions",
    foreignKey: "question_id",
});

// Question <==> level

Question.belongsTo(Level, {
    as: "level",
    foreignKey: "level_id",
});

Level.hasMany(Question, {
    as: "questions",
    foreignKey: "level_id",
});

// Question <=> quiz

Question.belongsTo(Quiz, {
    as: "quiz",
    foreignKey: "quiz_id",
});

Quiz.hasMany(Question, {
    as: "questions",
    foreignKey: "quiz_id",
});

// user <=> quiz

User.hasMany(Quiz, {
    as: "quizzes",
    foreignKey: "user_id",
});

Quiz.belongsTo(User, {
    as: "user",
    foreignKey: "user_id",
});

// * Quiz <-> Tag
Quiz.belongsToMany(Tag, {
    // through = à travers
    through: "quiz_has_tag", // C'est la table de jointure
    foreignKey: "quiz_id", // La clé étrangère permettant de faire la jonction entre Quiz et la table de jointure
    otherKey: "tag_id", // L'autre clé étrangère pour récupérer les sujets (tags),
    as: "tags", // On renomme la liste des sujets
  });
  
Tag.belongsToMany(Quiz, {
through: "quiz_has_tag",
foreignKey: "tag_id",
otherKey: "quiz_id",
as: "quizzes",
});



export {Question, Level, User, Quiz, Answer, Tag};