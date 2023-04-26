"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const funcionarios_controller_1 = __importDefault(require("../controller/funcionarios.controller"));
const rout = express.Router();
rout.get('/', (req, res) => new funcionarios_controller_1.default(req, res).getAllFuncionarios());
rout.get('/:id', (req, res) => new funcionarios_controller_1.default(req, res).findOneFuncionario());
rout.post('/', (req, res) => new funcionarios_controller_1.default(req, res).createFuncionario());
rout.patch('/:id', (req, res) => new funcionarios_controller_1.default(req, res).updateFunciionario());
rout.delete('/:id', (req, res) => new funcionarios_controller_1.default(req, res).deletFuncionario());
exports.default = rout;
