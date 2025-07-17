import { Level } from "../models/V2/associations.js";

const adminController = {
  // on crée une nouvelle méthode pour afficher la page d'administration
  showAdminPage: async (req, res) => {
    try {
      // Ici, vous pouvez ajouter la logique pour récupérer les données nécessaires à la page d'administration
      const levels = await Level.findAll();
      res.render("admin", { levels });
    } catch (error) {
      res.status(500).render("500");
    }
  },
};

export default adminController;
