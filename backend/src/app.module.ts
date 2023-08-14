import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartaoModule } from './cartao/cartao.module';
import { ContasAPagarModule } from './contas_a_pagar/contas_a_pagar.module';
import { ClienteModule } from './cliente/cliente.module';
import { ContasAReceberModule } from './contas_a_receber/contas_a_receber.module';
import { TransacaoModule } from './transacao/transacao.module';

@Module({
  imports: [
    TransacaoModule,
    CartaoModule,
    ContasAPagarModule,
    ClienteModule,
    ContasAReceberModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
