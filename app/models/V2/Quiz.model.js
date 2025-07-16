import sequelize from "../../database/sequelize.js";
import { DataTypes, Model } from "sequelize";

export default class Quiz extends Model {}

Quiz.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        picture_url: {
            type: DataTypes.STRING,
            allowNull: true,
            isUrl: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: "quiz",
    },
);