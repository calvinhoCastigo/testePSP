import Transacao from "./Transacao";

class ContasAPagar extends Transacao {
  private _id: number;

  constructor(
    id: number,
    valor: number,
    descricao: string,
    data: Date,
    numeroCartao: string,
    cvv: string,
    validade: Date
  ) {
    super(valor, descricao, data, numeroCartao, cvv, validade);
    this._id = id;
  }

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }
}
export default ContasAPagar;
