import { Controller, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { SellerService } from 'src/services/SellerService';
import { CreateSellerRequest, UpdateSellerRequest } from 'src/dtos/Seller.dto';

@Controller('sellers')
export class SellersController {
    constructor(private readonly sellerService: SellerService) {}

    @Post()
    async create(@Body() data: CreateSellerRequest) {
        return this.sellerService.create(data);
    }

    @Put(':id')
    async update(@Param('id') sellerId: string, @Body() data: Omit<UpdateSellerRequest, 'sellerId'>) {
        return this.sellerService.update({ sellerId, ...data });
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.sellerService.remove(id);
    }
}
