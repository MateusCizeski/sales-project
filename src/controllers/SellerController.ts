import { Controller, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateSellerService } from 'src/services/saller/CreateSellerService';
import { RemoveSellerService } from 'src/services/saller/RemoveSellerService';
import { UpdateSellerService } from 'src/services/saller/UpdateSellerService';

@Controller('/sellers')
export class SellersController {
    constructor(
        private readonly createSellerService: CreateSellerService,
        private readonly removeSellerService: RemoveSellerService,
        private readonly updateSellerService: UpdateSellerService
    ) {}

    @Post()
    async create(@Body('name') name: string) {
        return await this.createSellerService.execute(name);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body('name') name: string) {
        return await this.updateSellerService.execute(id, name);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.removeSellerService.execute(id);
    }
}
