import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

import TypeDocument from './type_document';

const Proveedor = sequelize.define('proveedor', {
  idproveedor: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  idtype_doc: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING(45),
    defaultValue: null,
  },
});

export default Proveedor;

// Relación con TypeDocument
Proveedor.belongsTo(TypeDocument, { foreignKey: 'idtype_doc' });
TypeDocument.hasMany(Proveedor, { foreignKey: 'idtype_doc' });