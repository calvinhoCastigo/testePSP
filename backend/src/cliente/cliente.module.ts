import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Cliente } from './entities/cliente.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Cliente])],
  controllers: [ClienteController],
  providers: [ClienteService],
})
export class ClienteModule {}
