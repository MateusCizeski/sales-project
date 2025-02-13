import { Injectable } from "@nestjs/common";
import prismaClient from "src/prisma";

interface UpdateSellerRequest {
    sellerId: string;
    name: string;
    email: string;
    birthDate: Date;
    baseSalary: number;
    departmentId: string;
}

@Injectable()
class UpdateSellerService {
    async execute({ sellerId, name, email, birthDate, baseSalary, departmentId }: UpdateSellerRequest) {
        const seller = await prismaClient.seller.update({
            where: {
                id: sellerId
            },
            data: {
                name,
                email,
                birthDate,
                baseSalary,
                departmentId
            }
        });

        return seller;
    }
}

export { UpdateSellerService }