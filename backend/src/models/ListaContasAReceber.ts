import ContasAReceber from "./ContasAReceber";

class ListaContasAReceber {
  private _saldo: number;
  private _lista: ContasAReceber[];

  constructor(lista: ContasAReceber[]) {
    this._lista = lista;
    this._saldo = 0;
  }

  get lista(): ContasAReceber[] {
    return this._lista;
  }
  get saldo(): number {
    return this._saldo;
  }

  set lista(lista: ContasAReceber[]) {
    this._lista = lista;
  }
  set saldo(saldo: number) {
    this._saldo = saldo;
  }
  setSaldo() {
    this.lista.forEach((contasareceber) => {
      if (!contasareceber.pendente) {
        this.saldo += contasareceber.valor;
      }
    });
  }
}
export default ListaContasAReceber;
