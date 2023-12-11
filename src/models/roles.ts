import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

const Roles = sequelize.define('roles', {
    idrole: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    role_name: {
        type: DataTypes.STRING
    }
});

export default Roles;