import Sequelize from "sequelize";
import {authdb} from './index'

export const Users = authdb.define("users", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
      type: Sequelize.STRING,
      allowNull: false
  },
  password: {
      type: Sequelize.STRING,
      allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  date_login: {
    type: Sequelize.DATE,
  },
  status: {
    type: Sequelize.TINYINT,
    defaultValue: true
  },

}, {
  timestamps: false
});