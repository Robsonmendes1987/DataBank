import { Model, INTEGER, STRING } from "sequelize";
import db from ".";

class Funcioanrio extends Model {
  declare id: number | null;
  declare nome: string;
  declare departamento: string;
  declare salario: string;
  declare data_nascimento: string;
}

Funcioanrio.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    nome: {
      allowNull: false,
      type: STRING,
    },
    departamento: {
      allowNull: false,
      type: STRING,
    },
    salario: {
      allowNull: false,
      type: STRING,
    },
    data_nascimento: {
      allowNull: false,
      type: STRING,
    },

    cpf: {
      allowNull: false,
      type: STRING,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: "funcionario",
    tableName: "funcionarios",
    timestamps: false,
  }
);

export default Funcioanrio;
