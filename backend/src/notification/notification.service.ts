import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Notification } from '../../generated/prisma';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';

@Injectable()
export class NotificationService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateNotificationDto): Promise<Notification> {
    return this.prisma.notification.create({ data });
  }

  async findAll(): Promise<Notification[]> {
    return this.prisma.notification.findMany();
  }

  async findOne(id: string): Promise<Notification | null> {
    return this.prisma.notification.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateNotificationDto): Promise<Notification> {
    return this.prisma.notification.update({ where: { id }, data });
  }

  async remove(id: string): Promise<Notification> {
    return this.prisma.notification.delete({ where: { id } });
  }
}
