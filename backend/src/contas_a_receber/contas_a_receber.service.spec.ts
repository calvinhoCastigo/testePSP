import { Test, TestingModule } from '@nestjs/testing';
import { ContasAReceberService } from './contas_a_receber.service';

describe('ContasAReceberService', () => {
  let service: ContasAReceberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContasAReceberService],
    }).compile();

    service = module.get<ContasAReceberService>(ContasAReceberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
