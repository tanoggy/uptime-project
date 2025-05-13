import { MonitorType } from '../../../generated/prisma';

export class UpdateMonitorDto {
  name?: string;
  type?: MonitorType;
  config?: any;
  isActive?: boolean;
  checkInterval?: number;
} 