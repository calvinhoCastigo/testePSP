import { Entity, OneToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Cartao } from 'src/cartao/entities/cartao.entity';

@Entity()
export class Cliente {
  @PrimaryKey()
  id: Number;

  @Property()
  nome: String;

  @OneToOne()
  cartao: Cartao;
}
