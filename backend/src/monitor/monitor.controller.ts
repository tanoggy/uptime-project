import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MonitorService } from './monitor.service';
import { CreateMonitorDto } from './dto/create-monitor.dto';
import { UpdateMonitorDto } from './dto/update-monitor.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('monitor')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('monitor')
export class MonitorController {
  constructor(private readonly monitorService: MonitorService) {}

  @Post()
  create(@Body() createMonitorDto: CreateMonitorDto) {
    return this.monitorService.create(createMonitorDto);
  }

  @Get()
  findAll() {
    return this.monitorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.monitorService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMonitorDto: UpdateMonitorDto) {
    return this.monitorService.update(id, updateMonitorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.monitorService.remove(id);
  }
}
