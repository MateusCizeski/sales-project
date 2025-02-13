import { Injectable } from '@nestjs/common';
import prismaClient from 'src/prisma';

@Injectable()
export class SalesRecordService {
    async findByDate(minDate?: Date, maxDate?: Date) {
        return prismaClient.salesRecord.findMany({
            where: {
                date: {
                    gte: minDate || new Date(new Date().getFullYear(), 0, 1), 
                    lte: maxDate || new Date() 
                }
            },
            include: {
                seller: {
                    include: {
                        department: true
                    }
                }
            },
            orderBy: {
                date: 'desc'
            }
        });
    }

    async findByDateGrouping(minDate?: Date, maxDate?: Date) {
        const sales = await prismaClient.salesRecord.findMany({
            where: {
                date: {
                    gte: minDate || new Date(new Date().getFullYear(), 0, 1),
                    lte: maxDate || new Date()
                }
            },
            include: {
                seller: {
                    include: {
                        department: true
                    }
                }
            },
            orderBy: {
                date: 'desc'
            }
        });

        const groupedSales = sales.reduce((acc, sale) => {
            const departmentName = sale.seller.department.name;
            if (!acc[departmentName]) {
                acc[departmentName] = [];
            }
            acc[departmentName].push(sale);
            return acc;
        }, {});

        return groupedSales;
    }
}