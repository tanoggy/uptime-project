import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsEnum, IsObject, IsBoolean, IsInt, Min } from 'class-validator';
import { MonitorType } from '../../../generated/prisma';

export class CreateMonitorDto {
  @ApiProperty({ example: 'My Website Monitor' })
  @IsString()
  name: string;

  @ApiProperty({ enum: MonitorType, example: MonitorType.HTTP })
  @IsEnum(MonitorType)
  type: MonitorType;

  @ApiProperty({ example: { url: 'https://example.com' }, type: Object })
  @IsObject()
  config: any;

  @ApiPropertyOptional({ example: true })
  @IsBoolean()
  isActive?: boolean;

  @ApiProperty({ example: 60 })
  @IsInt()
  @Min(1)
  checkInterval: number;
} 