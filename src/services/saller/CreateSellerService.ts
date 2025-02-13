import { Injectable } from "@nestjs/common";
import prismaClient from "src/prisma";

interface CreateSellerRequest {
    name: string;
    email: string;
    birthDate: Date;
    baseSalary: number;
    departmentId: string;
}

@Injectable()
class CreateSellerService {
    async execute({ name, email, birthDate, baseSalary, departmentId }: CreateSellerRequest) {
        const seller = await prismaClient.seller.create({
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

export { CreateSellerService }