import { Test, TestingModule } from '@nestjs/testing';
import { ContasAReceberController } from './contas_a_receber.controller';
import { ContasAReceberService } from './contas_a_receber.service';

describe('ContasAReceberController', () => {
  let controller: ContasAReceberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContasAReceberController],
      providers: [ContasAReceberService],
    }).compile();

    controller = module.get<ContasAReceberController>(ContasAReceberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
