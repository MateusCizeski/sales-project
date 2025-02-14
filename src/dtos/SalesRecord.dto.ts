import { SaleStatusEnum } from "src/enum/SaleStatus.enum";

export class CreateSalesRecord {
    sellerId: string;
    date: Date;
    amount: number;
    status: SaleStatusEnum;
}
