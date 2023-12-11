import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';
import Proveedor from './proveedor';
import Compra from './compra';
import User from './user'; 
import Product from './product';

const DetalleCompra = sequelize.define('detalle_compra', {
  idcompra: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idproveedor: {
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

export default DetalleCompra;


// Relaciones con otras tablas
DetalleCompra.belongsTo(Compra, { foreignKey: 'idcompra' });
DetalleCompra.belongsTo(Proveedor, { foreignKey: 'idproveedor' });
DetalleCompra.belongsTo(User, { foreignKey: 'iduser' });
DetalleCompra.belongsTo(Product, { foreignKey: 'idproducto' });
Compra.hasMany(DetalleCompra, { foreignKey: 'idcompra' });
Proveedor.hasMany(DetalleCompra, { foreignKey: 'idproveedor' });
User.hasMany(DetalleCompra, { foreignKey: 'iduser' });
Product.hasMany(DetalleCompra, { foreignKey: 'idproducto' });
