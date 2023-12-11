import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

import Proveedor from './proveedor';

const Product = sequelize.define('product', {
    idproducto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        defaultValue: null,
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: null,
    },
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: null,
    },
    description: {
        type: DataTypes.STRING(300),
        defaultValue: null,
    },
    category: {
        type: DataTypes.STRING(45),
        defaultValue: null,
    },
    idproveedor: {
        type: DataTypes.INTEGER,
        defaultValue: null,
    }
})

export default Product;

Product.belongsTo(Proveedor, { foreignKey: 'idproveedor' });
Proveedor.hasMany(Product, { foreignKey: 'idproveedor' });