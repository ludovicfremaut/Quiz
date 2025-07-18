import * as EmailValidator from "email-validator";
import PasswordValidator from "password-validator";
import { User } from "../models/V2/associations.js";
import argon2 from "argon2";

const authController = {
  // Méthode pour afficher la page d'inscription
  showLoginPage: (req, res) => {
    res.render("login", {
      data: null,
      errorMessage: null,
    });
  },

  // Gestion de la connexion d'un utilisateur
  handleLoginForm: async (req, res) => {
    try {
      // Récupération des données du formulaire
      const { email, password } = req.body;

      // Validation de l'email
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.render("login", {
          data: null,
          errorMessage: null,
        });
      }
      // Vérification du mot de passe
      const isPasswordValid = await argon2.verify(user.password, password);
      if (!isPasswordValid) {
        return res.render("login", {
          data: { email },
          errorMessage: ["Email ou mot de passe incorrect"],
        });
      }

      req.session.user = {
        id: user.id, // Stockage de l'ID de l'utilisateur dans la session
        firstname: user.firstname, // Stockage du prénom dans la session
        lastname: user.lastname, // Stockage du nom de famille dans la session
        email: user.email, // Stockage de l'email dans la session
      };
      console.log(req.session.user);
      res.redirect("/profile"); // Redirection vers la page de profil après connexion
    } catch (error) {
      console.error("Erreur dans handleLoginForm :", error);
      res.status(500).render("500");
    }
  },

  // Méthode pour afficher la page d'inscription
  showSignupPage: (req, res) => {
    res.render("signup", {
      data: null,
      errorMessage: null,
    });
  },

  // Gestion de l'inscription d'un utilisateur
  handleSignupForm: async (req, res) => {
    try {
      // Récupération de nos différents champs via la destructuration
      // On crée des constantes basées sur le nom de la propriété et sa valeur
      const { firstname, lastname, email, password, confirmation } = req.body;

      console.log(req.body);

      if (!firstname || !lastname || !email || !password || !confirmation) {
        return res.render("signup", {
          data: req.body,
          errorMessage: ["Tous les champs sont requis"],
        });
      }
      // Validation de l'email
      if (!EmailValidator.validate(email)) {
        return res.render("signup", {
          data: req.body,
          errorMessage: ["L'email n'est pas valide"],
        });
      }
      // Validation du mot de passe
      const passwordSchema = new PasswordValidator();
      passwordSchema
        .is()
        .min(8) // Minimum 8 caractères
        .is()
        .max(100) // Maximum 100 caractères
        .has()
        .uppercase() // Doit contenir au moins une majuscule
        .has()
        .lowercase() // Doit contenir au moins une minuscule
        .has()
        .digits(2) // Doit contenir au moins 2 chiffres
        .has()
        .not()
        .spaces(); // Ne doit pas contenir d'espaces
      // Le mdp ne doit pas être égal à la liste noire de mdp interdits
      //schema.is().not().oneOf(["12345678", "password", "qwertyuiop"]);

      // Je crée un tableau d'erreurs
      const passwordErrors = passwordSchema.validate(password, {
        details: true,
      });

      // Si la validation est false....
      if (passwordErrors.length > 0) {
        return res.render("signup", {
          data: req.body,
          errorMessage: passwordErrors.map((error) => error.message).join(", "),
        });
      }

      // Vérification de la confirmation du mot de passe il doit être identique au mot de passe
      if (password !== confirmation) {
        return res.render("signup", {
          data: req.body,
          errorMessage: "La confirmation du mot de passe ne correspond pas",
        });
      }

      // Vérifier si l'email est disponible
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.render("signup", {
          data: req.body,
          errorMessage: "L'email est déjà utilisé",
        });
      }
      // Hachage du mot de passe
      const hashedPassword = await argon2.hash(password);
      console.log(hashedPassword);

      // Création de l'utilisateur dans la base de données
      await User.create({
        firstname,
        lastname,
        email,
        password: hashedPassword,
      });

      // Redirection vers la page de connexion après l'inscription réussie
      res.redirect("/connexion");

    } catch (error) {
      console.error("Erreur dans handleSignupForm :", error);
      res.status(500).render("500");
    }
  },
};

export default authController;
