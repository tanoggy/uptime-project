import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('user')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    // Registration should be handled by /auth/register
    return { message: 'Use /auth/register to create a user.' };
  }

  @Get()
  async findAll() {
    const users = await this.userService.findAll();
    return users.map(({ password, ...user }) => user);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.userService.findOne(id);
    if (!user) return null;
    const { password, ...rest } = user;
    return rest;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const user = await this.userService.update(id, updateUserDto);
    const { password, ...rest } = user;
    return rest;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const user = await this.userService.remove(id);
    const { password, ...rest } = user;
    return rest;
  }
}
