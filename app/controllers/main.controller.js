// On crée un nouveau controller pour tout ce qui est en lien avec la page d'accueil
import { Quiz } from "../models/V2/associations.js";

const mainController = {
  // on crée une nouvelle méthode pour afficher la page d'accueil
  showHomePage: async (req, res) => {
    try {
      const quizzes = await Quiz.findAll({
        include: [
          {
            association: "user",
            attributes: ["firstname", "lastname"],
          },
          {
            association: "tags",
            attributes: ["name"],
            through: {
              attributes: [],
            },
          },
        ],
      });
      res.status(200).render("index", { quizzes });
    } catch (error) {
      res.status(500).render("500");
    }
  },
};

export default mainController;
