"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const type_document_1 = __importDefault(require("./type_document"));
const Proveedor = connection_1.default.define('proveedor', {
    idproveedor: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    idtype_doc: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING(45),
        defaultValue: null,
    },
});
exports.default = Proveedor;
// Relación con TypeDocument
Proveedor.belongsTo(type_document_1.default, { foreignKey: 'idtype_doc' });
type_document_1.default.hasMany(Proveedor, { foreignKey: 'idtype_doc' });
