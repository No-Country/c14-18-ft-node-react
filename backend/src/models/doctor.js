import { DataTypes } from "sequelize"
import { sequelize } from "../database/database.js"

export const Doctor = sequelize.define('doctors', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING
    },
    speciality: {
        type: DataTypes.STRING
    },
    location: {
        type: DataTypes.STRING
    },
    studies: {
        type: DataTypes.STRING
    },
    interest: {
        type: DataTypes.STRING
    }
})