import { PrimaryKey, Property } from '@mikro-orm/core';
import { Transacao } from 'src/transacao/entities/transacao.entity';

export class ContasAReceber extends Transacao {
  @PrimaryKey()
  id!: Number;

  @Property()
  pendente!: Boolean;
}
