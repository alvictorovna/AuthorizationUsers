import Sequelize from "sequelize";

export const authdb = new Sequelize("authdb", "admin", "admin", {
  dialect: "mysql",
  host: "localhost"
});