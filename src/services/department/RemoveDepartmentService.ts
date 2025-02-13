import { Injectable } from "@nestjs/common";
import prismaClient from "src/prisma";

@Injectable()
class RemoveDepartmentService {
    async execute(id: string) {
        await prismaClient.department.remove({
            where: {
                id: id
            }
        });
    }
}

export { RemoveDepartmentService }