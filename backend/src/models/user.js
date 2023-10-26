import { DataTypes } from "sequelize"
import { sequelize } from "../database/database.js"
import { Appointments } from "./appointments.js"

export const Patient = sequelize.define('patients', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    documentId: {
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    last_name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    birthDate: {
        type: DataTypes.DATE
    },
    gender: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
})

Patient.hasMany(Appointments, {
    foreignKey: 'patientId',
    constraints: false
})

Appointments.belongsTo(Patient, {
    foreignKey: 'patientId', // Especifica la clave foránea para la relación con el paciente
    constraints: false,
  });
