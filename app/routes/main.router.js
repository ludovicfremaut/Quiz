import express from "express";
import mainController from "../controllers/main.controller.js";

// On créer une instance basé sur le router d'express
const mainRouter = express.Router();

//GET => affichage page d'accueil
mainRouter.get("/", mainController.showHomePage);

// On exporte le router
export default mainRouter;
