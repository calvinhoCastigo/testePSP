import { PrimaryKey, Property } from '@mikro-orm/core';

export class Cartao {
  @PrimaryKey()
  uuid: Number;

  @Property({ length: 4 })
  numero: Number;

  @Property()
  validade: String;

  @Property({ length: 3 })
  cvv: String;
}
