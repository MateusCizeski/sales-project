import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SellerModule } from './modules/seller.module';
import { DepartmentModule } from './modules/department.module';

@Module({
  imports: [SellerModule, DepartmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
