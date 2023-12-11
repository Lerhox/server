"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const MetPago = connection_1.default.define('met_pago', {
    idmet_pago: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    met_pago_name: {
        type: sequelize_1.DataTypes.STRING(45),
        defaultValue: null,
    },
});
exports.default = MetPago;
