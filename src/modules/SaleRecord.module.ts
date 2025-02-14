import { Module } from "@nestjs/common";
import { SalesRecordsController } from "src/controllers/SalesRecordsController";
import { SalesRecordService } from "src/services/SalesRecordService";

@Module({
    controllers: [SalesRecordsController],
    providers: [SalesRecordService]
})

export class SaleRecordModule {}