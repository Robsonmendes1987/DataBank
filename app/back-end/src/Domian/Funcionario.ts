class Funcioanrio {
    id?: number;
    private nome: string;
    private departamento: string;
    private salario: string; 
    private data_nascimento: string;
    
    constructor(
        id: number | undefined,
        nome: string,
        departamento: string,
        salario: string,
        data_nascimento: string,
    ) {
        this.nome = nome
        this.departamento = departamento,
        this.data_nascimento = data_nascimento,
        this.salario = salario
    }

    public setId (id: number) {
        this.id = id;
    }

    public setnome (nome: string) {
        this.nome = nome;
    }

    public getnome () {
        return this.nome;
    }

    public setdepartamento (departamento: string) {
        this.departamento = departamento;
    }

    public getdepartamento () {
        return this.departamento;
    }


    public setdata_nascimento (data_nascimento: string) {
        this.departamento = data_nascimento;
    }

    public getdata_nascimento () {
        return this.data_nascimento;
    }


    public setsalario (salario: string) {
        this.salario = salario;
    }

    public getsalario () {
        return this.salario;
    }
}
export default Funcioanrio
