import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';
import MetPago from './met_pago';

const Compra = sequelize.define('compra', {
  idcompra: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  idmet_pago: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  monto_total: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: null,
  },
  fecha: {
    type: DataTypes.DATE,
    defaultValue: null,
  },
});

export default Compra;



Compra.belongsTo(MetPago, { foreignKey: 'idmet_pago' });
MetPago.hasMany(Compra, { foreignKey: 'idmet_pago' });