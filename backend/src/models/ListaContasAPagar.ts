import ContasAPagar from "./ContasAPagar";

class ListaContasAPagar {
  private _saldo: number;
  private _lista: ContasAPagar[];

  constructor(lista: ContasAPagar[]) {
    this._lista = lista;
    this._saldo = 0;
  }

  get lista(): ContasAPagar[] {
    return this._lista;
  }

  get saldo(): number {
    return this._saldo;
  }

  set lista(lista: ContasAPagar[]) {
    this._lista = lista;
  }
  set saldo(saldo: number) {
    this._saldo = saldo;
  }
  setSaldo() {
    this.lista.forEach((contasapagar) => {
      this.saldo += contasapagar.valor;
    });
  }
}
export default ListaContasAPagar;
