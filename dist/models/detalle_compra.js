"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const proveedor_1 = __importDefault(require("./proveedor"));
const compra_1 = __importDefault(require("./compra"));
const user_1 = __importDefault(require("./user"));
const product_1 = __importDefault(require("./product"));
const DetalleCompra = connection_1.default.define('detalle_compra', {
    idcompra: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    idproveedor: {
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
exports.default = DetalleCompra;
// Relaciones con otras tablas
DetalleCompra.belongsTo(compra_1.default, { foreignKey: 'idcompra' });
DetalleCompra.belongsTo(proveedor_1.default, { foreignKey: 'idproveedor' });
DetalleCompra.belongsTo(user_1.default, { foreignKey: 'iduser' });
DetalleCompra.belongsTo(product_1.default, { foreignKey: 'idproducto' });
compra_1.default.hasMany(DetalleCompra, { foreignKey: 'idcompra' });
proveedor_1.default.hasMany(DetalleCompra, { foreignKey: 'idproveedor' });
user_1.default.hasMany(DetalleCompra, { foreignKey: 'iduser' });
product_1.default.hasMany(DetalleCompra, { foreignKey: 'idproducto' });
