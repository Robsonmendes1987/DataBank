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
const funcionario_1 = __importDefault(require("../model/funcionario"));
class createFuncionario {
    crateFUncioanrio(funcionario) {
        return __awaiter(this, void 0, void 0, function* () {
            const newfuncioanrio = yield funcionario_1.default.create(Object.assign({}, funcionario));
            if (newfuncioanrio === null || newfuncioanrio === undefined) {
                return { type: 401, message: "Fielde IMCOMPLET" };
            }
            return { type: 201, message: newfuncioanrio };
        });
    }
    updateFuncinario(id, funcionario) {
        return __awaiter(this, void 0, void 0, function* () {
            const upDateFuncionario = yield funcionario_1.default.findByPk(id);
            if (!upDateFuncionario)
                return { type: 404, message: "Algo deu errado" };
            yield upDateFuncionario.update(Object.assign({}, funcionario), { where: { id } });
            console.log("SERVICE", Object.assign({ id }, funcionario));
            return { type: 201, message: Object.assign({ id }, funcionario) };
        });
    }
    getFuncionarioById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const funcionario = yield funcionario_1.default.findByPk(id);
            if (!funcionario) {
                return { type: 400, message: 'Funcionario nao encontrado' };
            }
            return { type: 201, message: funcionario };
        });
    }
    deleteFuncionario(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const funcionario = yield funcionario_1.default.destroy({ where: { id } });
            if (!funcionario) {
                return { type: 400, message: 'Nao foi possivel excluir, Funcionario nao encontrado' };
            }
            return { type: 201, message: funcionario };
        });
    }
    getAllFuncionario() {
        return __awaiter(this, void 0, void 0, function* () {
            const funcionario = yield funcionario_1.default.findAll();
            return { type: 200, message: funcionario };
        });
    }
}
exports.default = createFuncionario;
