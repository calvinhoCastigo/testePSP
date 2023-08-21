import Transacao from "./Transacao";

class ContasAReceber extends Transacao {
  private _id: number;
  private _pendente: boolean;

  constructor(
    id: number,
    pendente: boolean,
    valor: number,
    descricao: string,
    data: Date,
    numeroCartao: string,
    cvv: string,
    validade: Date
  ) {
    super(valor, descricao, data, numeroCartao, cvv, validade);
    this._id = id;
    this._pendente = pendente;
  }

  get id(): number {
    return this._id;
  }
  get pendente(): boolean {
    return this._pendente;
  }

  set id(id: number) {
    this._id = id;
  }
  set pendete(pendente: boolean) {
    this._pendente = pendente;
  }

  pendenteString() {
    return this.pendente ? " sim " : " não ";
  }
}
export default ContasAReceber;
