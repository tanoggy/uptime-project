import { ApiPropertyOptional } from '@nestjs/swagger';
import { NotificationType } from '../../../generated/prisma';

export class UpdateNotificationDto {
  @ApiPropertyOptional({ enum: NotificationType, example: NotificationType.EMAIL })
  type?: NotificationType;

  @ApiPropertyOptional({ example: 'notify@example.com' })
  address?: string;

  @ApiPropertyOptional({ example: true })
  isActive?: boolean;
} 