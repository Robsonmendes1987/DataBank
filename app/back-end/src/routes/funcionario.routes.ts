import * as express from 'express';
import Funcionario from '../controller/funcionarios.controller';

const rout = express.Router();
rout.get('/', (req, res) => new Funcionario(req, res).getAllFuncionarios())
rout.get('/:id', (req, res) => new Funcionario(req, res).findOneFuncionario())
rout.post('/', (req, res) => new Funcionario(req, res).createFuncionario())
rout.patch('/:id', (req, res) => new Funcionario(req, res).updateFunciionario())
rout.delete('/:id', (req, res) => new Funcionario(req, res).deletFuncionario())

export default rout

