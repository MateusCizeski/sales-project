import { Injectable } from "@nestjs/common";
import prismaClient from "src/prisma";

@Injectable()
class CreateDepartmentService {
    async execute(name: string) {
        const department = await prismaClient.department.create({
            data: {
                name
            }
        });

        return department;
    }
}

export { CreateDepartmentService }