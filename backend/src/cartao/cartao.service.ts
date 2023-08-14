import { Injectable } from '@nestjs/common';
import { CreateCartaoDto } from './dto/create-cartao.dto';
import { UpdateCartaoDto } from './dto/update-cartao.dto';

@Injectable()
export class CartaoService {
  create(createCartaoDto: CreateCartaoDto) {
    return 'This action adds a new cartao';
  }

  findAll() {
    return `This action returns all cartao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cartao`;
  }

  update(id: number, updateCartaoDto: UpdateCartaoDto) {
    return `This action updates a #${id} cartao`;
  }

  remove(id: number) {
    return `This action removes a #${id} cartao`;
  }
}
