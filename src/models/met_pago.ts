import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

const MetPago = sequelize.define('met_pago', {
  idmet_pago: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  met_pago_name: {
    type: DataTypes.STRING(45),
    defaultValue: null,
  },
});

export default MetPago;