"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const roles_1 = __importDefault(require("./roles"));
const type_user_1 = __importDefault(require("./type_user"));
const type_document_1 = __importDefault(require("./type_document"));
const User = connection_1.default.define('user', {
    iduser: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idrole: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 1,
    },
    idtypeuser: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 1,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    idtype_doc: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 1,
    },
    documento: {
        type: sequelize_1.DataTypes.INTEGER,
    },
});
exports.default = User;
// Relaciones
User.belongsTo(roles_1.default, { foreignKey: 'idrole' });
User.belongsTo(type_user_1.default, { foreignKey: 'idtypeuser' });
User.belongsTo(type_document_1.default, { foreignKey: 'idtype_doc' });
roles_1.default.hasMany(User, { foreignKey: 'idrole' });
type_user_1.default.hasMany(User, { foreignKey: 'idtypeuser' });
type_document_1.default.hasMany(User, { foreignKey: 'idtype_doc' });
