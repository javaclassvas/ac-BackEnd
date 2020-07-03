import config from "../config/config.json";
import { Options, Sequelize } from "sequelize";

const dbConfig = (config as { [key: string]: any })[process.env.NODE_ENV];
const sequelize = new Sequelize(
  dbConfig["database"],
  dbConfig["username"],
  dbConfig["password"],
  dbConfig as Options
);

export default sequelize;
