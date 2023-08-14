import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContasAReceberService } from './contas_a_receber.service';
import { CreateContasAReceberDto } from './dto/create-contas_a_receber.dto';
import { UpdateContasAReceberDto } from './dto/update-contas_a_receber.dto';

@Controller('contas-a-receber')
export class ContasAReceberController {
  constructor(private readonly contasAReceberService: ContasAReceberService) {}

  @Post()
  create(@Body() createContasAReceberDto: CreateContasAReceberDto) {
    return this.contasAReceberService.create(createContasAReceberDto);
  }

  @Get()
  findAll() {
    return this.contasAReceberService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contasAReceberService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContasAReceberDto: UpdateContasAReceberDto) {
    return this.contasAReceberService.update(+id, updateContasAReceberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contasAReceberService.remove(+id);
  }
}
