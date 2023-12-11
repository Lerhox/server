import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

const Servicio = sequelize.define('servicio', {
  idservicio: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  service_name: {
    type: DataTypes.STRING(45),
    defaultValue: null,
  },
  cost: {
    type: DataTypes.STRING(45),
    defaultValue: null,
  },
  description: {
    type: DataTypes.STRING(45),
    defaultValue: null,
  },
  type_service: {
    type: DataTypes.STRING(45),
    defaultValue: null,
  },
});

export default Servicio;