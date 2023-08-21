import ListaContasAPagar from "./ListaContasAPagar";
import ListaContasAReceber from "./ListaContasAReceber";

class Cliente {
  private _id: number;
  private _nome: string;
  private _saldo: number;
  private _listaContasAPagar: ListaContasAPagar | null;
  private _listaContasAReceber: ListaContasAReceber | null;

  constructor(
    id: number,
    nome: string,
    saldo: number,
    listaContasAPagar: ListaContasAPagar,
    listaContasAReceber: ListaContasAReceber
  ) {
    this._id = id;
    this._nome = nome;
    this._saldo = saldo;
    this._listaContasAPagar = listaContasAPagar;
    this._listaContasAReceber = listaContasAReceber;
  }

  get id(): number {
    return this._id;
  }
  get nome(): string {
    return this._nome;
  }
  get saldo(): number {
    return this._saldo;
  }
  get listaContasAPagar(): ListaContasAPagar | null {
    return this._listaContasAPagar;
  }
  get listaContasAReceber(): ListaContasAReceber | null {
    return this._listaContasAReceber;
  }

  set id(id: number) {
    this._id = id;
  }
  set nome(nome: string) {
    this._nome = nome;
  }
  set saldo(saldo: number) {
    this._saldo = this.saldo;
  }
  set listaContasAPagar(lista: ListaContasAPagar) {
    this._listaContasAPagar = lista;
  }
  set listaContasAReceber(lista: ListaContasAReceber) {
    this._listaContasAReceber = lista;
  }
}
export default Cliente;
