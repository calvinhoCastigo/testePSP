import { Injectable } from '@nestjs/common';
import { CreateContasAReceberDto } from './dto/create-contas_a_receber.dto';
import { UpdateContasAReceberDto } from './dto/update-contas_a_receber.dto';

@Injectable()
export class ContasAReceberService {
  create(createContasAReceberDto: CreateContasAReceberDto) {
    return 'This action adds a new contasAReceber';
  }

  findAll() {
    return `This action returns all contasAReceber`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contasAReceber`;
  }

  update(id: number, updateContasAReceberDto: UpdateContasAReceberDto) {
    return `This action updates a #${id} contasAReceber`;
  }

  remove(id: number) {
    return `This action removes a #${id} contasAReceber`;
  }
}
