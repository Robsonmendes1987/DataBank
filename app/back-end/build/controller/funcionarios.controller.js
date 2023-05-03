"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const funcionario_service_1 = __importDefault(require("../service/funcionario.service"));
class Funcionario {
    constructor(req, res) {
        (this.req = req), (this.res = res);
        this.service = new funcionario_service_1.default();
    }
    createFuncionario() {
        return __awaiter(this, void 0, void 0, function* () {
            const { type, message } = yield this.service.crateFUncioanrio(this.req.body);
            console.log("CONTROLLER", this.req.body);
            this.res.status(type).json(message);
        });
    }
    findOneFuncionario() {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = this.req.params;
            const { type, message } = yield this.service.getFuncionarioById(id);
            this.res.status(type).json(message);
        });
    }
    getAllFuncionarios() {
        return __awaiter(this, void 0, void 0, function* () {
            const { type, message } = yield this.service.getAllFuncionario();
            this.res.status(type).json(message);
        });
    }
    deletFuncionario() {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = this.req.params;
            const { type, message } = yield this.service.deleteFuncionario(id);
            this.res.status(type).json(message);
        });
    }
    updateFunciionario() {
        return __awaiter(this, void 0, void 0, function* () {
            const new_funcionario = this.req.body;
            const { id } = this.req.params;
            console.log("CONTROLLER", new_funcionario);
            const { type, message } = yield this.service.updateFuncinario(Number(id), new_funcionario);
            return this.res.status(type).json(message);
        });
    }
}
exports.default = Funcionario;
