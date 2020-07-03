import { Model, STRING, INTEGER, DATE } from "sequelize";
import sequelize from "./";
import User from "./User";

export default class Message extends Model {
  id: number;
  userId: number;
  content: string;
  createdAt: number;
  user?: User;
}

Message.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: INTEGER,
      allowNull: false,
    },
    content: STRING(300),
    createdAt: DATE,
    updatedAt: DATE,
  },
  { sequelize, modelName: "Message" }
);

Message.belongsTo(User, { as: "user", foreignKey: "userId" });
