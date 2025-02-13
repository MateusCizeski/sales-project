import { Module } from '@nestjs/common';
import { CreateSellerController } from 'src/controllers/saller/CreateSellerController';
import { CreateSellerService } from 'src/services/saller/CreateSellerService';

@Module({
    controllers: [CreateSellerController],
    services: [CreateSellerService]
})

export class SellerModule {}