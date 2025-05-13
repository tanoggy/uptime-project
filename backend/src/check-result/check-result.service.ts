import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CheckResult } from '../../generated/prisma';
import { CreateCheckResultDto } from './dto/create-check-result.dto';
import { UpdateCheckResultDto } from './dto/update-check-result.dto';

@Injectable()
export class CheckResultService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCheckResultDto): Promise<CheckResult> {
    return this.prisma.checkResult.create({ data });
  }

  async findAll(): Promise<CheckResult[]> {
    return this.prisma.checkResult.findMany();
  }

  async findOne(id: string): Promise<CheckResult | null> {
    return this.prisma.checkResult.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateCheckResultDto): Promise<CheckResult> {
    return this.prisma.checkResult.update({ where: { id }, data });
  }

  async remove(id: string): Promise<CheckResult> {
    return this.prisma.checkResult.delete({ where: { id } });
  }
}
