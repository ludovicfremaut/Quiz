// Permets de pouvoir lire les variables d'environnements
// Stockées dans .env
import "dotenv/config";
// On importe le middleware de session
import { setupSession } from "./app/middlewares/session.js";

// On importe express
import express from "express";
import path from "node:path";

// On importe le router principal
import mainRouter from "./app/routes/main.router.js";
import tagRouter from "./app/routes/tag.router.js";
import quizRouter from "./app/routes/quiz.router.js";
import adminRouter from "./app/routes/admin.router.js";
import authRouter from "./app/routes/auth.router.js";

//On crée une nouvelle instance d'express
const app = express();

// Récupération des propriétés stockées dans le corps de la requête
app.use(express.urlencoded({ extended: true }));

// Paramétrage du moyeur de template
app.set("views", path.join(import.meta.dirname, "app", "views"));
app.set("view engine", "ejs");

// paramétrage des fichiers statique
app.use(express.static("public"));

// Je vais passer par le middleware de session pour vérifier
// si je dispose d'un accès ou pas
app.use(setupSession);

//On appelle les routers
app.use(adminRouter);
app.use(authRouter);
app.use(mainRouter);
app.use(quizRouter);
app.use(tagRouter);

app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(process.env.PORT, () => {
  console.log(`OQuiz est lancé sur le port ${process.env.PORT}`);
});
