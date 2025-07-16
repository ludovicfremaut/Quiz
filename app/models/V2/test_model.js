// import Quiz from "./Quiz.model.js";
// import Question from "./Question.model.js";
// import Level from "./Level.model.js";
// import { DataTypes, Model } from "sequelize";
import {Question, Level, User, Quiz} from './associations.js';

// const quizzes = await Quiz.findAll({raw: true});
// console.table(quizzes);

// récupérer toutes les questions
// const questions = await Question.findAll({raw: true});
// console.table(questions);

// récupérer question dont l'id est 3
// const questionId3 = await Question.findByPk(3);
// console.log(questionId3);

// Créer un niveau `très difficile`
// const veryHardLevel = await Level.create(
//     {
//         name: "Très difficile",
//         type: DataTypes.TEXT,
//         allowNull: false,
//     },
//     { fields: ['name']},
// );
// console.log(veryHardLevel)


// const level = await Level.findOne({
//     where: { id: 1 },
//     include: "questions",
// });

// console.log(JSON.stringify(level, null, 2))



// const quiz = await Quiz.findOne({
//     where: {id:1},
//     include: "questions",
// });

const question = await Question.findOne({
    where: {id: 1},
    include: "quiz",
});

const user = await User.findOne({
    where: {id: 1},
    include: "quizzes",
});

const quiz = await Quiz.findOne({
    where: {id: 1},
    include: "users",
});


console.log(JSON.stringify(user, null, 2));