import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

import Roles from "./roles";
import TypeUser from "./type_user";
import TypeDocument from "./type_document";

const User = sequelize.define('user', {
    iduser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idrole: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
    },
    idtypeuser: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idtype_doc: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
    },
    documento: {
        type: DataTypes.INTEGER,
    },
    
});

export default User;

// Relaciones
User.belongsTo(Roles, { foreignKey: 'idrole' });
User.belongsTo(TypeUser, { foreignKey: 'idtypeuser' });
User.belongsTo(TypeDocument, { foreignKey: 'idtype_doc' });
Roles.hasMany(User, { foreignKey: 'idrole' });
TypeUser.hasMany(User, { foreignKey: 'idtypeuser' });
TypeDocument.hasMany(User, { foreignKey: 'idtype_doc' });