import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';
import TypeDocument from './type_document';

const Cliente = sequelize.define('cliente', {
  idcliente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  idtype_doc: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  categoria: {
    type: DataTypes.STRING(45),
    defaultValue: null,
  },
});

export default Cliente;

Cliente.belongsTo(TypeDocument, { foreignKey: 'idtype_doc' });
TypeDocument.hasMany(Cliente, { foreignKey: 'idtype_doc' });
