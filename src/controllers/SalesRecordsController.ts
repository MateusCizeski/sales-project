import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { CreateSalesRecord } from "src/dtos/SalesRecord.dto";
import { SalesRecordService } from "src/services/SalesRecordService";

@Controller('salesrecords')
export class SalesRecordsController {
    constructor(private readonly salesRecordService: SalesRecordService) {}

    @Get('simple-search')
    async simpleSearch(
        @Query('minDate') minDate?: string,
        @Query('maxDate') maxDate?: string
    ) {
        const min = minDate ? new Date(minDate) : new Date(new Date().getFullYear(), 0, 1);
        const max = maxDate ? new Date(maxDate) : new Date();

        const result = await this.salesRecordService.findByDate(min, max);
        return { minDate: min.toISOString().split('T')[0], maxDate: max.toISOString().split('T')[0], result };
    }

    @Get('grouping-search')
    async groupingSearch(
        @Query('minDate') minDate?: string,
        @Query('maxDate') maxDate?: string
    ) {
        const min = minDate ? new Date(minDate) : new Date(new Date().getFullYear(), 0, 1);
        const max = maxDate ? new Date(maxDate) : new Date();

        const result = await this.salesRecordService.findByDateGrouping(min, max);
        return { minDate: min.toISOString().split('T')[0], maxDate: max.toISOString().split('T')[0], result };
    }

    @Post()
    async create(@Body() createSalesRecordDto: CreateSalesRecord) {
        return await this.salesRecordService.create(createSalesRecordDto);
    }
}