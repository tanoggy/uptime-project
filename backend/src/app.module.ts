import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { MonitorModule } from './monitor/monitor.module';
import { CheckResultModule } from './check-result/check-result.module';
import { NotificationModule } from './notification/notification.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, PrismaModule, MonitorModule, CheckResultModule, NotificationModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
