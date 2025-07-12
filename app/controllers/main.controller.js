// On crée un nouveau controller pour tout ce qui est en lien avec la page d'accueil

const mainController = {
  // on crée une nouvelle méthode pour afficher la page d'accueil
  showHomePage: (req, res) => {
    res.status(200).render("index");
  },
};

export default mainController;
