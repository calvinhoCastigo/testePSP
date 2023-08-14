import { Module } from '@nestjs/common';
import { CartaoService } from './cartao.service';
import { CartaoController } from './cartao.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Cartao } from './entities/cartao.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Cartao])],
  controllers: [CartaoController],
  providers: [CartaoService],
})
export class CartaoModule {}
