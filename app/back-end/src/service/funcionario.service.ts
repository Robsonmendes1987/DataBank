import FuncioanrioModel from "../model/funcionario";
import IFuncioanario from "../interfaces/IFuncionario";

class createFuncionario {
  public async crateFUncioanrio(funcionario: IFuncioanario) {
    const newfuncioanrio = await FuncioanrioModel.create({ ...funcionario });
    if (newfuncioanrio === null || newfuncioanrio === undefined) {
      return { type: 401, message: "Fielde IMCOMPLET" };
    }
    return { type: 201, message: newfuncioanrio };
  }

  public async updateFuncinario(id: number, funcionario: IFuncioanario) {
    const upDateFuncionario = await FuncioanrioModel.findByPk(id);
    if (!upDateFuncionario) return { type: 404, message: "Algo deu errado" };

    await upDateFuncionario.update({ ...funcionario }, { where: { id } });
    console.log("SERVICE", { id, ...funcionario });
    return { type: 201, message: { id, ...funcionario } };
  }

  public async getFuncionarioById(id: string) {
    const funcionario = await FuncioanrioModel.findByPk(id);
    if (!funcionario){
      return {type: 400, message: 'Funcionario nao encontrado'}
    }
    return { type: 201, message: funcionario };
  }

  public async deleteFuncionario(id: string) {
    const funcionario = await FuncioanrioModel.destroy({ where: { id } });

    if (!funcionario){
      return {type: 400, message: 'Nao foi possivel excluir, Funcionario nao encontrado'}
    }
    return { type: 201, message: funcionario };
  
  }

  public async getAllFuncionario() {
    const funcionario = await FuncioanrioModel.findAll();
    return { type: 200, message: funcionario };
  }
}

export default createFuncionario;
