import { Controller, Post, Body, UnauthorizedException, UsePipes, ValidationPipe, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() body: { email: string; password: string; name?: string }) {
    if (!body.email || !body.password) {
      throw new BadRequestException('Email and password are required');
    }
    return this.authService.register(body.email, body.password, body.name);
  }

  @Post('login')
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async login(@Body() loginDto: LoginDto) {
    if (!loginDto || !loginDto.email || !loginDto.password) {
      throw new BadRequestException('Email and password are required');
    }
    const user = await this.authService.validateUser(loginDto.email, loginDto.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(user);
  }
}
