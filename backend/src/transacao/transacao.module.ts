import { Module } from '@nestjs/common';
import { TransacaoService } from './transacao.service';
import { TransacaoController } from './transacao.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Transacao } from './entities/transacao.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Transacao])],
  controllers: [TransacaoController],
  providers: [TransacaoService],
})
export class TransacaoModule {}
