import express from "express";
import authController from "../controllers/auth.controller.js";

const authRouter = express.Router();
//
authRouter.get("/inscription", authController.showSignupPage);
authRouter.post("/inscription", authController.handleSignupForm);

authRouter.get("/connexion", authController.showLoginPage);
authRouter.post("/connexion", authController.handleLoginForm);

export default authRouter;
