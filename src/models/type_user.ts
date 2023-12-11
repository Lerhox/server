import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

const TypeUser = sequelize.define('type_user', {
    idtypeuser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    typeusername: {
        type: DataTypes.STRING,
    }
});

export default TypeUser;