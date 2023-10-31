import { DataTypes } from "sequelize"
import { sequelize } from "../database/database.js"
import { Appointments } from "./appointments.js"

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
    },
    availability: {
        type: DataTypes.STRING
    }

})

Doctor.hasMany(Appointments, {
    foreignKey: 'doctorId',
    constraints: false
})

Appointments.belongsTo(Doctor, {
    foreignKey: 'doctorId', // Especifica la clave foránea para la relación con el médico
    constraints: false,
});
