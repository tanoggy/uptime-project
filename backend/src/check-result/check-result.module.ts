import { Module } from '@nestjs/common';
import { CheckResultController } from './check-result.controller';
import { CheckResultService } from './check-result.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CheckResultController],
  providers: [CheckResultService]
})
export class CheckResultModule {}
