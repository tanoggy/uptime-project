import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateCheckResultDto {
  @ApiPropertyOptional({ example: 'UP' })
  status?: string;

  @ApiPropertyOptional({ example: 123 })
  responseTime?: number;

  @ApiPropertyOptional({ example: { httpStatus: 200 }, type: Object })
  details?: any;

  @ApiPropertyOptional({ example: '2025-05-13T09:43:29.333Z' })
  checkedAt?: Date;
} 