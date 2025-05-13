import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'user@example.com' })
  email: string;

  @ApiProperty({ example: 'strongPassword123' })
  password: string;

  @ApiPropertyOptional({ example: 'John Doe' })
  name?: string;
} 