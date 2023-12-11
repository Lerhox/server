"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const TypeDocument = connection_1.default.define('type_document', {
    idtype_doc: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    type_doc_name: {
        type: sequelize_1.DataTypes.STRING(45),
        defaultValue: null,
    },
});
exports.default = TypeDocument;
