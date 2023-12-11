import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

const TypeDocument = sequelize.define('type_document', {
  idtype_doc: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  type_doc_name: {
    type: DataTypes.STRING(45),
    defaultValue: null,
  },
});

export default TypeDocument;