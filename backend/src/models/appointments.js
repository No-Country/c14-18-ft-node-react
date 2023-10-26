import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Appointments = sequelize.define('appointments', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Date: {
        type: DataTypes.DATE
    },
    location: {
        type: DataTypes.STRING
    }
})



  
