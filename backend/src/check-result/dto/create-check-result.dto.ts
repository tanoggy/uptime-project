export class CreateCheckResultDto {
  monitorId: string;
  status: string;
  responseTime?: number;
  details?: any;
  checkedAt?: Date;
} 