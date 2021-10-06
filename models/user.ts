"use strict";
import { Model } from "sequelize";

interface UserAttributes {
  id: string;
  name: string;
  email: string;
  password: string;
  resetToken?:string
}

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    id!: string;
    name!: string;
    email!: string;
    password!: string;
    resetToken?:string

    static associate(models: any) {
      User.hasMany(models.Transaction, {foreignKey:'userId',as:"transactions"})

    }
  }
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      resetToken:{
        type:DataTypes.STRING
      }
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
