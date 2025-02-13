import { Injectable } from "@nestjs/common";
import prismaClient from "src/prisma";
import { CreateSellerRequest, UpdateSellerRequest } from "src/dtos/seller.dto"; // ✅ Importando

@Injectable()
class SellerService {
    async create(data: CreateSellerRequest) {
        return prismaClient.seller.create({ data });
    }

    async remove(sellerId: string) {
        await prismaClient.seller.delete({ where: { id: sellerId } });
        return { message: "Seller deleted successfully" };
    }

    async update({ sellerId, ...data }: UpdateSellerRequest) {
        return prismaClient.seller.update({
            where: { id: sellerId },
            data,
        });
    }
}

export { SellerService };
