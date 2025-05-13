import { NotificationType } from '../../../generated/prisma';

export class UpdateNotificationDto {
  type?: NotificationType;
  address?: string;
  isActive?: boolean;
} 