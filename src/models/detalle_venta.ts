import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';
import Cliente from './cliente';
import User from './user';
import Product from './product';
import Servicio from './servicio';
import Venta from './venta'; 

const DetalleVenta = sequelize.define('detalle_venta', {
  idventa: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idcliente: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  iduser: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idproducto: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cantidad: {
    type: DataTypes.STRING(45),
    defaultValue: null,
  },
});

export default DetalleVenta;

DetalleVenta.belongsTo(Venta, { foreignKey: 'idventa' });
DetalleVenta.belongsTo(Cliente, { foreignKey: 'idcliente' });
DetalleVenta.belongsTo(User, { foreignKey: 'iduser' });
DetalleVenta.belongsTo(Product, { foreignKey: 'idproducto' });
Venta.hasMany(DetalleVenta, { foreignKey: 'idventa' });
Cliente.hasMany(DetalleVenta, { foreignKey: 'idcliente' });
User.hasMany(DetalleVenta, { foreignKey: 'iduser' });
Product.hasMany(DetalleVenta, { foreignKey: 'idproducto' });