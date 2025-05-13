import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { MonitorType } from '../../../generated/prisma';

export class CreateMonitorDto {
  @ApiProperty({ example: 'user-uuid' })
  userId: string;

  @ApiProperty({ example: 'My Website Monitor' })
  name: string;

  @ApiProperty({ enum: MonitorType, example: MonitorType.HTTP })
  type: MonitorType;

  @ApiProperty({ example: { url: 'https://example.com' }, type: Object })
  config: any;

  @ApiPropertyOptional({ example: true })
  isActive?: boolean;

  @ApiProperty({ example: 60 })
  checkInterval: number;
} 