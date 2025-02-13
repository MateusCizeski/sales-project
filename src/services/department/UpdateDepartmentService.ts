import { Injectable } from "@nestjs/common";
import prismaClient from "src/prisma";

@Injectable()
class UpdateDepartmentService {
    async execute(id: string, name: string) {
        const department = await prismaClient.department.create({
            where: {
                id: id
            },
            data: {
                name
            }
        });

        return department;
    }
}

export { UpdateDepartmentService }