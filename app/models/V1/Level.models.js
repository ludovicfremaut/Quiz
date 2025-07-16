import client from "../client.js";

export default class Level {
    // Propriétés
    id;
    name;
    created_at;
    updated_at;

    // Constructeur
    // On récupérera un objet avec des propriétés
    // qu'on assignera à notre instance de classe
    constructor(object) {
        this.id = object.id;
        this.name = object.name;
        this.created_at = object.created_at;
        this.updated_at = object.updated_at;
    }

    // Méthode d'insertion d'un nouvel objet (Create)
    async insert() {
        const result = await client.query({
        text: `INSERT INTO level (name) VALUES ($1)
                RETURNING *;`,
        values: [this.name],
        });

        const dataInserted = result.rows[0];

        this.id = dataInserted.id;

        return this;
    }

    // Méthode de récupération de tous les niveaux (Read)
    static async findAll() {
        const result = await client.query(`SELECT * FROM level`);
        // Pour chaque résultat du tableau, je vais créer une nouvelle
        // instance basée sur la classe Level afin que chaque niveau
        // soit structuré comme ma classe.
        const levels = result.rows.map((level) => new Level(level));
        return levels;
    }

    // Méthode de récupération d'un seul élément (Read)
    static async find(levelId) {
        const sql = {
        text: `SELECT * FROM level WHERE id = $1`,
        values: [levelId],
        };

        const result = await client.query(sql);
        const level = new Level(result.rows[0]);
        return level;
    }

    // Méthode d'insertion d'un nouvel objet (Update)
    async update() {
        await client.query({
        text: `UPDATE level SET name = $2 WHERE id = $1
                RETURNING *;`,
        values: [this.id, this.name],
        });

        return this;
    }

    // Méthode d'insertion d'un nouvel objet (Delete)
    async delete() {
        await client.query({
        text: `DELETE FROM level WHERE id = $1;`,
        values: [this.id],
        });

        const message = `Objet supprimé avec succès`;

        // L'id n'existe plus en BDD, on le renseigne à notre objet
        this.id = undefined;

        return message;
    }
}