import { MonitorType } from '../../../generated/prisma';

export class CreateMonitorDto {
  userId: string;
  name: string;
  type: MonitorType;
  config: any;
  isActive?: boolean;
  checkInterval: number;
} 