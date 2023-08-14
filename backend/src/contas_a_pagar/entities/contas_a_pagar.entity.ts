import { PrimaryKey, Property } from '@mikro-orm/core';
import { Transacao } from 'src/transacao/entities/transacao.entity';

export class ContasAPagar extends Transacao {
  @PrimaryKey()
  id!: Number;

  @Property({ onCreate: () => new Date().setDate(new Date().getDate() + 30) })
  data = new Date();
}
