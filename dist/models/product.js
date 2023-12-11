"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const proveedor_1 = __importDefault(require("./proveedor"));
const Product = connection_1.default.define('product', {
    idproducto: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: null,
    },
    price: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        defaultValue: null,
    },
    stock: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: null,
    },
    description: {
        type: sequelize_1.DataTypes.STRING(300),
        defaultValue: null,
    },
    category: {
        type: sequelize_1.DataTypes.STRING(45),
        defaultValue: null,
    },
    idproveedor: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: null,
    }
});
exports.default = Product;
Product.belongsTo(proveedor_1.default, { foreignKey: 'idproveedor' });
proveedor_1.default.hasMany(Product, { foreignKey: 'idproveedor' });
