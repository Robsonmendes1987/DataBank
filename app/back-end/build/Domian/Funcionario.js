"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Funcioanrio {
    constructor(id, nome, departamento, salario, data_nascimento) {
        this.nome = nome;
        this.departamento = departamento,
            this.data_nascimento = data_nascimento,
            this.salario = salario;
    }
    setId(id) {
        this.id = id;
    }
    setnome(nome) {
        this.nome = nome;
    }
    getnome() {
        return this.nome;
    }
    setdepartamento(departamento) {
        this.departamento = departamento;
    }
    getdepartamento() {
        return this.departamento;
    }
    setdata_nascimento(data_nascimento) {
        this.departamento = data_nascimento;
    }
    getdata_nascimento() {
        return this.data_nascimento;
    }
    setsalario(salario) {
        this.salario = salario;
    }
    getsalario() {
        return this.salario;
    }
}
exports.default = Funcioanrio;
