import { Test, TestingModule } from '@nestjs/testing';
import { CheckResultController } from './check-result.controller';

describe('CheckResultController', () => {
  let controller: CheckResultController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CheckResultController],
    }).compile();

    controller = module.get<CheckResultController>(CheckResultController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
