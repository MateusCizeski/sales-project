import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SellerModule } from './modules/Seller.module';
import { DepartmentModule } from './modules/Department.module';
import { SaleRecordModule } from './modules/SaleRecord.module';

@Module({
  imports: [SellerModule, DepartmentModule, SaleRecordModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
