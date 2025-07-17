// On importe express
import express from "express";
import adminController from "../controllers/admin.controller.js";

// On crée une instance basée sur le router d'Express
const adminRouter = express.Router();

// GET => affichage page d'administration
adminRouter.get("/admin", adminController.showAdminPage);

// on exporte le routeur
export default adminRouter;