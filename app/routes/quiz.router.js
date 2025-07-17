import express from "express";
import quizController from "../controllers/quiz.controller.js";

// On créer une instance basé sur le router d'express
const quizRouter = express.Router();

//GET => affichage page des quizs
quizRouter.get("/quiz/:id", quizController.showQuizPage);

// On exporte le router
export default quizRouter;