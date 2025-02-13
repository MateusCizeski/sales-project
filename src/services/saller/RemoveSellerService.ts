import { Injectable } from "@nestjs/common";
import prismaClient from "src/prisma";

@Injectable()
class RemoveSellerService {
    async execute(sellerId: string) {
        await prismaClient.seller.remove({
            where: {
                id: sellerId
            }
        });
    }
}

export { RemoveSellerService }