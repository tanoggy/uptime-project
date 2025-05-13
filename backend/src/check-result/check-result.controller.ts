import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CheckResultService } from './check-result.service';
import { CreateCheckResultDto } from './dto/create-check-result.dto';
import { UpdateCheckResultDto } from './dto/update-check-result.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('check-result')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('check-result')
export class CheckResultController {
  constructor(private readonly checkResultService: CheckResultService) {}

  @Post()
  create(@Body() createCheckResultDto: CreateCheckResultDto) {
    return this.checkResultService.create(createCheckResultDto);
  }

  @Get()
  findAll() {
    return this.checkResultService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.checkResultService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCheckResultDto: UpdateCheckResultDto) {
    return this.checkResultService.update(id, updateCheckResultDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.checkResultService.remove(id);
  }
}
