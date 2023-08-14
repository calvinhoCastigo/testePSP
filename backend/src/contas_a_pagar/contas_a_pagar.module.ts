import { Module } from '@nestjs/common';
import { ContasAPagarService } from './contas_a_pagar.service';
import { ContasAPagarController } from './contas_a_pagar.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ContasAPagar } from './entities/contas_a_pagar.entity';

@Module({
  imports: [MikroOrmModule.forFeature([ContasAPagar])],
  controllers: [ContasAPagarController],
  providers: [ContasAPagarService],
})
export class ContasAPagarModule {}
