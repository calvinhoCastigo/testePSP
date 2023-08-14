import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContasAPagarService } from './contas_a_pagar.service';
import { CreateContasAPagarDto } from './dto/create-contas_a_pagar.dto';
import { UpdateContasAPagarDto } from './dto/update-contas_a_pagar.dto';

@Controller('contas-a-pagar')
export class ContasAPagarController {
  constructor(private readonly contasAPagarService: ContasAPagarService) {}

  @Post()
  create(@Body() createContasAPagarDto: CreateContasAPagarDto) {
    return this.contasAPagarService.create(createContasAPagarDto);
  }

  @Get()
  findAll() {
    return this.contasAPagarService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contasAPagarService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContasAPagarDto: UpdateContasAPagarDto) {
    return this.contasAPagarService.update(+id, updateContasAPagarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contasAPagarService.remove(+id);
  }
}
