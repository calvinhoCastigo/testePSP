abstract class Transacao {
  private _valor: number;
  private _descricao: string;
  protected _data: Date;
  private _numeroCartao: string;
  private _cvv: string;
  private _validadeCartao: Date;

  constructor(
    valor: number,
    descricao: string,
    data: Date,
    numeroCartao: string,
    cvv: string,
    validade: Date
  ) {
    this._valor = valor;
    this._descricao = descricao;
    this._data = data;
    this._numeroCartao = numeroCartao;
    this._cvv = cvv;
    this._validadeCartao = validade;
  }

  get valor(): number {
    return this._valor;
  }
  get descricao(): string {
    return this._descricao;
  }
  get data(): Date {
    return this._data;
  }
  get cvv(): string {
    return this._cvv;
  }
  get numeroCartao(): string {
    return this._numeroCartao;
  }
  get validade(): string {
    return this._validadeCartao.toString();
  }

  set valor(valor: number) {
    this._valor = valor;
  }
  set descricao(descricao: string) {
    this._descricao = descricao;
  }

  set numeroCartao(numeroCartao: string) {
    this._numeroCartao = numeroCartao.slice(-4);
  }
  set cvv(cvv: string) {
    this._cvv = cvv;
  }
  set validade(validade: Date) {
    this._validadeCartao = validade;
  }
}
export default Transacao;
