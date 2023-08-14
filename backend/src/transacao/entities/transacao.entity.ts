import { Entity, OneToOne, Property } from '@mikro-orm/core';
import { Cliente } from 'src/cliente/entities/cliente.entity';

@Entity({ abstract: true })
export abstract class Transacao {
  @Property()
  valor!: Number;

  @Property()
  descricao?: String;

  @Property()
  numeroCartao!: Number;

  @Property()
  validadeCatao!: String;

  @Property()
  cvvCartao!: String;

  @OneToOne()
  cliente!: Cliente;

  @Property({ onCreate: () => new Date() })
  data = new Date();
}
