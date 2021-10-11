import { Sequelize } from "sequelize";

require("dotenv").config();

const isTest = process.env.NODE_ENV === "test";

const dbName = process.env.DB_NAME || "test";
const dbHost = process.env.DB_HOST || "localhost";
const dbUser = process.env.DB_USER || "root";
const dbDriver = process.env.DB_DRIVER || "mysql";
const dbPassword = process.env.DB_PASSWORD || "";

const config = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver,
  logging: false,
});

export default config;
