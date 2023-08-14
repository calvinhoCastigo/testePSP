import { PartialType } from '@nestjs/mapped-types';
import { CreateContasAPagarDto } from './create-contas_a_pagar.dto';

export class UpdateContasAPagarDto extends PartialType(CreateContasAPagarDto) {}
