"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Funcioanrio extends sequelize_1.Model {
}
Funcioanrio.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.INTEGER,
    },
    nome: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    departamento: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    salario: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    data_nascimento: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    cpf: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
}, {
    underscored: true,
    sequelize: _1.default,
    modelName: "funcionario",
    tableName: "funcionarios",
    timestamps: false,
});
exports.default = Funcioanrio;
