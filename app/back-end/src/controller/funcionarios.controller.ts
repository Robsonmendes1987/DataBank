import { Request, response, Response } from "express";
import FunconarioService from "../service/funcionario.service";

export default class Funcionario {
  private req: Request;
  private res: Response;
  private service: FunconarioService;

  constructor(req: Request, res: Response) {
    (this.req = req), (this.res = res);
    this.service = new FunconarioService();
  }

  public async createFuncionario() {
    const { type, message } = await this.service.crateFUncioanrio(
      this.req.body
    );
    console.log("CONTROLLER", this.req.body);

    this.res.status(type).json(message);
  }

  public async findOneFuncionario() {
    const { id } = this.req.params;
    const { type, message } = await this.service.getFuncionarioById(id);
    this.res.status(type).json(message);
  }

  public async getAllFuncionarios() {
    const { type, message } = await this.service.getAllFuncionario();
    this.res.status(type).json(message);
  }

  public async deletFuncionario() {
    const {id} = this.req.params;
    const {type, message} = await this.service.deleteFuncionario(id)
    this.res.status(type).json(message)
  }

  public async updateFunciionario() {
    const new_funcionario = this.req.body;
    const { id } = this.req.params;
    console.log("CONTROLLER", new_funcionario);

    const { type, message } = await this.service.updateFuncinario(
      Number(id),
      new_funcionario
    );
    return this.res.status(type).json(message);
  }
}
