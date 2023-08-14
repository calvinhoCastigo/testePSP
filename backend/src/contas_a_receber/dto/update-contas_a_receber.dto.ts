import { PartialType } from '@nestjs/mapped-types';
import { CreateContasAReceberDto } from './create-contas_a_receber.dto';

export class UpdateContasAReceberDto extends PartialType(CreateContasAReceberDto) {}
