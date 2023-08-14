import { Test, TestingModule } from '@nestjs/testing';
import { ContasAPagarController } from './contas_a_pagar.controller';
import { ContasAPagarService } from './contas_a_pagar.service';

describe('ContasAPagarController', () => {
  let controller: ContasAPagarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContasAPagarController],
      providers: [ContasAPagarService],
    }).compile();

    controller = module.get<ContasAPagarController>(ContasAPagarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
