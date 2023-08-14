import { Module } from '@nestjs/common';
import { ContasAReceberService } from './contas_a_receber.service';
import { ContasAReceberController } from './contas_a_receber.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ContasAReceber } from './entities/contas_a_receber.entity';

@Module({
  imports: [MikroOrmModule.forFeature([ContasAReceber])],
  controllers: [ContasAReceberController],
  providers: [ContasAReceberService],
})
export class ContasAReceberModule {}
