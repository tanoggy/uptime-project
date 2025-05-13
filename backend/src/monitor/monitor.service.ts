import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Monitor } from '../../generated/prisma';
import { CreateMonitorDto } from './dto/create-monitor.dto';
import { UpdateMonitorDto } from './dto/update-monitor.dto';

@Injectable()
export class MonitorService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateMonitorDto): Promise<Monitor> {
    return this.prisma.monitor.create({ data });
  }

  async findAll(): Promise<Monitor[]> {
    return this.prisma.monitor.findMany();
  }

  async findOne(id: string): Promise<Monitor | null> {
    return this.prisma.monitor.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateMonitorDto): Promise<Monitor> {
    return this.prisma.monitor.update({ where: { id }, data });
  }

  async remove(id: string): Promise<Monitor> {
    return this.prisma.monitor.delete({ where: { id } });
  }
}
