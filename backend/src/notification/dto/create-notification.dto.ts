import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { NotificationType } from '../../../generated/prisma';

export class CreateNotificationDto {
  @ApiProperty({ example: 'user-uuid' })
  userId: string;

  @ApiProperty({ enum: NotificationType, example: NotificationType.EMAIL })
  type: NotificationType;

  @ApiProperty({ example: 'notify@example.com' })
  address: string;

  @ApiPropertyOptional({ example: true })
  isActive?: boolean;
} 