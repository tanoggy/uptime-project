import { NotificationType } from '../../../generated/prisma';

export class CreateNotificationDto {
  userId: string;
  type: NotificationType;
  address: string;
  isActive?: boolean;
} 