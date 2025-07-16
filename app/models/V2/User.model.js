import sequelize from "../../database/sequelize.js";
import { DataTypes, Model } from "sequelize";

export default class User extends Model {}

User.init(
    {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true,
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        firstname: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        lastname: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        sequelize,
        tableName: "user",
    }
);