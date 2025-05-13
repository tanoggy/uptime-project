import { ApiPropertyOptional } from '@nestjs/swagger';
import { MonitorType } from '../../../generated/prisma';

export class UpdateMonitorDto {
  @ApiPropertyOptional({ example: 'My Website Monitor' })
  name?: string;

  @ApiPropertyOptional({ enum: MonitorType, example: MonitorType.HTTP })
  type?: MonitorType;

  @ApiPropertyOptional({ example: { url: 'https://example.com' }, type: Object })
  config?: any;

  @ApiPropertyOptional({ example: true })
  isActive?: boolean;

  @ApiPropertyOptional({ example: 60 })
  checkInterval?: number;
} 