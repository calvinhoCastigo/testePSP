import { Injectable } from '@nestjs/common';
import { CreateContasAPagarDto } from './dto/create-contas_a_pagar.dto';
import { UpdateContasAPagarDto } from './dto/update-contas_a_pagar.dto';

@Injectable()
export class ContasAPagarService {
  create(createContasAPagarDto: CreateContasAPagarDto) {
    return 'This action adds a new contasAPagar';
  }

  findAll() {
    return `This action returns all contasAPagar`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contasAPagar`;
  }

  update(id: number, updateContasAPagarDto: UpdateContasAPagarDto) {
    return `This action updates a #${id} contasAPagar`;
  }

  remove(id: number) {
    return `This action removes a #${id} contasAPagar`;
  }
}
