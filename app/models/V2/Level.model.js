import sequelize from "../../database/sequelize.js";
import { DataTypes, Model } from "sequelize";

export default class Level extends Model {}

Level.init(
    {
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: "level",
    },
);