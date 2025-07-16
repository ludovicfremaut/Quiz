// On crée un nouveau controller pour tout ce qui est en lien avec la page d'accueil

const mainController = {
  // on crée une nouvelle méthode pour afficher la page d'accueil
  showHomePage: (req, res) => {
    try {
      const quizzes = await Quiz.fin
      res.status(200).render("index");
    } catch (error) {
      res.status(500).render("500") 
    }
  },
};

export default mainController;
