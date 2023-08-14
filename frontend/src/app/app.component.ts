import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'testePSP';

  cartao = [
    {
      uuid: '8ba97a11-9481-468b-a52b-731571c8e774',
      numero: 7765,
      validade: '99/99',
      cvv: '784',
      saldo: 7000,
    },
  ];

  cliente = [
    {
      uuid: '8ba97a11-9481-468b-a52b-731571c8e774',
      nome: 'Álvaro Castilho',
      cartao: this.cartao,
    },
  ];

  listaTransacoes = [
    {
      uuid: '8ba97a11-9481-468b-a52b-731f71c8e774',
      valor: 400,
      descricao: 'saldo teste 1',
      numeroCartao: '4766',
      validadeCartao: '12/37',
      cvvCartao: '766',
      data: '2023-08-14T15:09:01.712Z',
    },
    {
      uuid: '624b847a-3e87-4bcf-a817-cd86d43cba28',
      valor: 44400,
      descricao: 'saldo teste 2',
      numeroCartao: '4766',
      validadeCartao: '12/37',
      cvvCartao: '766',
      data: '2023-08-14T15:09:01.712Z',
    },
    {
      uuid: '15b8e942-ec92-4f12-a683-f5c5c98eaee2',
      valor: 1000,
      descricao: 'saldo teste 3',
      numeroCartao: '6600',
      validadeCartao: '12/37',
      cvvCartao: '756',
      data: '2023-08-14T15:09:01.713Z',
    },
    {
      uuid: '13056838-dee4-453d-9753-504510f89180',
      valor: 50,
      descricao: 'saldo teste 4',
      numeroCartao: '8550',
      validadeCartao: '09/39',
      cvvCartao: '321',
      data: '2023-08-14T15:09:01.713Z',
    },
  ];
}
