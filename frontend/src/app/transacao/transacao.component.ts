import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transacao',
  templateUrl: './transacao.component.html',
  styleUrls: ['./transacao.component.css'],
})
export class TransacaoComponent {
  public uuid: String;
  public valor: Number;
  public descricao: String;
  public numeroCartao: Number;
  public validadeCartao: String;
  public cvvCartao: String;
  public data: Date;
  // @Input() uuid: String;
  // @Input() valor: Number;
  // @Input() descricao: String;
  // @Input() numeroCartao: Number;
  // @Input() validadeCartao: String;
  // @Input() cvvCartao: String;
  // @Input() data: Date;

  constructor(
    uuid: String,
    valor: Number,
    descricao: String,
    numeroCartao: Number,
    validadeCartao: String,
    cvvCartao: String,
    data: Date
  ) {
    this.uuid = uuid;
    this.valor = valor;
    this.descricao = descricao;
    this.numeroCartao = numeroCartao;
    this.validadeCartao = validadeCartao;
    this.cvvCartao = cvvCartao;
    this.data = data;
  }
}
