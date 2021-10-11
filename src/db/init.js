import { User } from "./models";

require("dotenv").config();

const isDev = process.env.NODE_ENV === "development";
const isTest = process.env.NODE_ENV !== "test";

const initDb = () => Promise.all([User.sync({ alter: isDev || isTest })]);

export default initDb;
