import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';
import MetPago from './met_pago'; 

const Venta = sequelize.define('venta', {
  idventa: {
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
});

export default Venta;

Venta.belongsTo(MetPago, { foreignKey: 'idmet_pago' });
MetPago.hasMany(Venta, { foreignKey: 'idmet_pago' });