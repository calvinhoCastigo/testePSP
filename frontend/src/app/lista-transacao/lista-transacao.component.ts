import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista-transacao',
  templateUrl: './lista-transacao.component.html',
  styleUrls: ['./lista-transacao.component.css'],
})
export class ListaTransacaoComponent {
  @Input() list = <any>[];

  constructor() {}

  ngOnInit() {}
}
