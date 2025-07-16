import Level from "./Level.model.js";
import User from "./User.model.js";

// On crée une nouvelle constante contenant un objet que l'on souhaite
// créer en base de données (pour l'instant il est côté serveur)
// const monLevel = new Level({ name: "Mon super niveau" });

// J'appelle la méthode insert qui permet d'ajouter cet objet en base de données
// await monLevel.insert();

// je mets à jour mon objet côté serveur web...
// monLevel.name = "Mon super niveau modifié";

// Et ensuite, je fais l'opération pour modifier cet objet en bdd
// await monLevel.update();

// Si je veux le supprimer
// await monLevel.delete();

// Ici, je souhaite récupérer tous mes niveaux
const getLevels = async () => {
    const levels = await Level.findAll();
    console.table(levels);
};

getLevels();

// Ici, je souhaite récupérer un niveau dont l'id est 1
const myLevel = await Level.find(1);

console.log(myLevel);

// challenge 3 partie 1

// Récupérer tous les users
const findAll = async () => {
    const users = await User.findAll();
    console.table(users);
}

findAll();


// Récupérer un user en fonction de l'id
const myUserById = await User.findId(1);
console.table(myUserById);

// Récupérer un user par email
const myUserByEmail = await User.findEmail('chuck@oclock.io');
console.table(myUserByEmail);