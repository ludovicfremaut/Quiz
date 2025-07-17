import express from "express";
import tagController from "../controllers/tag.controller.js";

// On créer une instance basé sur le router d'express
const tagRouter = express.Router();

//GET => affichage page des tags
tagRouter.get("/tags", tagController.showTagsPage);

// On exporte le router
export default tagRouter;