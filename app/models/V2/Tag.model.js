import sequelize from "../../database/sequelize.js";
import { DataTypes, Model } from "sequelize";

export default class Tag extends Model {}

Tag.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: "tag",
    },
);