import { Module } from '@nestjs/common';
import { SellersController } from 'src/controllers/SellerController';
import { SellerService } from 'src/services/SellerService';

@Module({
    controllers: [SellersController],
    providers: [SellerService]
})

export class SellerModule {}