import { Model, STRING, INTEGER } from "sequelize";
import sequelize from "./";

export default class User extends Model {
  id: number;
  nickname: string;
}

User.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nickname: {
      type: STRING(35),
      allowNull: false,
      unique: true,
    },
  },
  { sequelize, modelName: "User", timestamps: false }
);
