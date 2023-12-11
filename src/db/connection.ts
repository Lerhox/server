import { Sequelize } from "sequelize";

const sequelize = new Sequelize('ecoproj', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize;