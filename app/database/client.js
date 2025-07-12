import dotenv from "dotenv";
import pg from "pg";

const { Client } = pg;

// Permets de pouvoir lire les variables d'environnements
// Stockées dans .env
const client = new Client(process.env.PG_URL);
// On connecte le client à la base de données
client.connect();

export default client;
