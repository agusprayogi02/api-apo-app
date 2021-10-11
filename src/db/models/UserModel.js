import { Model, DataTypes } from "sequelize";
const config = require("../config");

class User extends Model {}

User.init(
  {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    role: {
      type: DataTypes.ENUM,
      values: ["user", "admin", "member"],
      defaultValue: "user",
    },
  },
  {
    config,
    modelName: "users",
  }
);

export default User;
