import { Test, TestingModule } from '@nestjs/testing';
import { CheckResultService } from './check-result.service';

describe('CheckResultService', () => {
  let service: CheckResultService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheckResultService],
    }).compile();

    service = module.get<CheckResultService>(CheckResultService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
