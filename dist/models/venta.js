"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const met_pago_1 = __importDefault(require("./met_pago"));
const Venta = connection_1.default.define('venta', {
    idventa: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    idmet_pago: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    monto_total: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        defaultValue: null,
    },
});
exports.default = Venta;
Venta.belongsTo(met_pago_1.default, { foreignKey: 'idmet_pago' });
met_pago_1.default.hasMany(Venta, { foreignKey: 'idmet_pago' });
