import express from "express";
import authController from "../controllers/auth.controller.js";

const authRouter = express.Router();
//
authRouter.get("/inscription", authController.showSignupPage);
authRouter.post("/inscription", authController.handleSignupForm);

authRouter.get("/connexion", authController.showLoginPage);
authRouter.post("/connexion", authController.handleLoginForm);

authRouter.get("/profile", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/connexion");
  }

  res.render("profile", {
    user: req.session.user,
  });

  authRouter.get("/deconnexion", (req, res) => {
    req.session.destroy(() => {
      res.redirect("/connexion");
    });
  });
});

export default authRouter;
