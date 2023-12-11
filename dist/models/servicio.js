"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Servicio = connection_1.default.define('servicio', {
    idservicio: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    service_name: {
        type: sequelize_1.DataTypes.STRING(45),
        defaultValue: null,
    },
    cost: {
        type: sequelize_1.DataTypes.STRING(45),
        defaultValue: null,
    },
    description: {
        type: sequelize_1.DataTypes.STRING(45),
        defaultValue: null,
    },
    type_service: {
        type: sequelize_1.DataTypes.STRING(45),
        defaultValue: null,
    },
});
exports.default = Servicio;
