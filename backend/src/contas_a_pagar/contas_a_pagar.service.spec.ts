import { Test, TestingModule } from '@nestjs/testing';
import { ContasAPagarService } from './contas_a_pagar.service';

describe('ContasAPagarService', () => {
  let service: ContasAPagarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContasAPagarService],
    }).compile();

    service = module.get<ContasAPagarService>(ContasAPagarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
