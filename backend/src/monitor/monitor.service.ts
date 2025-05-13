import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Monitor, MonitorType } from '../../generated/prisma';
import { CreateMonitorDto } from './dto/create-monitor.dto';
import { UpdateMonitorDto } from './dto/update-monitor.dto';
import axios from 'axios';
import * as net from 'net';
import * as tls from 'tls';
import * as dns from 'dns';
import * as ping from 'ping';

@Injectable()
export class MonitorService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateMonitorDto, userId: string): Promise<Monitor> {
    return this.prisma.monitor.create({ data: { ...data, userId } });
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

  async runCheck(monitor: Monitor): Promise<any> {
    let result;
    switch (monitor.type) {
      case MonitorType.HTTP:
        result = await this.checkHTTP(monitor);
        break;
      case MonitorType.SSL:
        result = await this.checkSSL(monitor);
        break;
      case MonitorType.DOMAIN:
        result = await this.checkDomain(monitor);
        break;
      case MonitorType.TCP:
        result = await this.checkTCP(monitor);
        break;
      case MonitorType.ICMP:
        result = await this.checkICMP(monitor);
        break;
      case MonitorType.KEYWORD:
        result = await this.checkKeyword(monitor);
        break;
      case MonitorType.HEARTBEAT:
        result = await this.checkHeartbeat(monitor);
        break;
      default:
        result = { status: 'NOT_IMPLEMENTED', details: 'Unknown monitor type' };
    }
    // Store result in CheckResult table
    await this.prisma.checkResult.create({
      data: {
        monitorId: monitor.id,
        status: result.status?.toString() || 'UNKNOWN',
        responseTime: result.responseTime,
        details: result,
        checkedAt: new Date(),
      },
    });
    return result;
  }

  async checkHTTP(monitor: Monitor) {
    const config = monitor.config as any;
    const url = config.url;
    const start = Date.now();
    try {
      const response = await axios.get(url);
      return {
        status: response.status,
        responseTime: Date.now() - start,
      };
    } catch (e) {
      return {
        status: 'DOWN',
        error: e.message,
      };
    }
  }

  async checkSSL(monitor: Monitor) {
    return { status: 'NOT_IMPLEMENTED', details: 'TODO: Implement SSL check' };
  }

  async checkDomain(monitor: Monitor) {
    return { status: 'NOT_IMPLEMENTED', details: 'TODO: Implement Domain WHOIS check' };
  }

  async checkTCP(monitor: Monitor) {
    return { status: 'NOT_IMPLEMENTED', details: 'TODO: Implement TCP port check' };
  }

  async checkICMP(monitor: Monitor) {
    return { status: 'NOT_IMPLEMENTED', details: 'TODO: Implement ICMP ping check' };
  }

  async checkKeyword(monitor: Monitor) {
    return { status: 'NOT_IMPLEMENTED', details: 'TODO: Implement Keyword check' };
  }

  async checkHeartbeat(monitor: Monitor) {
    return { status: 'NOT_IMPLEMENTED', details: 'TODO: Heartbeat is handled by receiving pings' };
  }

  async findAllByUser(userId: string): Promise<Monitor[]> {
    return this.prisma.monitor.findMany({ where: { userId } });
  }

  async findOneByUser(id: string, userId: string): Promise<Monitor | null> {
    return this.prisma.monitor.findFirst({ where: { id, userId } });
  }
}
