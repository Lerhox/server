"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const cliente_1 = __importDefault(require("./cliente"));
const user_1 = __importDefault(require("./user"));
const product_1 = __importDefault(require("./product"));
const venta_1 = __importDefault(require("./venta"));
const DetalleVenta = connection_1.default.define('detalle_venta', {
    idventa: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    idcliente: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    iduser: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    idproducto: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    cantidad: {
        type: sequelize_1.DataTypes.STRING(45),
        defaultValue: null,
    },
});
exports.default = DetalleVenta;
DetalleVenta.belongsTo(venta_1.default, { foreignKey: 'idventa' });
DetalleVenta.belongsTo(cliente_1.default, { foreignKey: 'idcliente' });
DetalleVenta.belongsTo(user_1.default, { foreignKey: 'iduser' });
DetalleVenta.belongsTo(product_1.default, { foreignKey: 'idproducto' });
venta_1.default.hasMany(DetalleVenta, { foreignKey: 'idventa' });
cliente_1.default.hasMany(DetalleVenta, { foreignKey: 'idcliente' });
user_1.default.hasMany(DetalleVenta, { foreignKey: 'iduser' });
product_1.default.hasMany(DetalleVenta, { foreignKey: 'idproducto' });
