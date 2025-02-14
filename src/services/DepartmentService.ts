import { Injectable } from '@nestjs/common';
import prismaClient from 'src/prisma';
import { CreateDepartmentDto, UpdateDepartmentDto } from 'src/dtos/Department.dto';

@Injectable()
export class DepartmentService {
    async findAll() {
        return await prismaClient.department.findMany();
    }

    async findById(id: string) {
        return await prismaClient.department.findUnique({ where: { id } });
    }

    async create(data: CreateDepartmentDto) {
        return await prismaClient.department.create({ data });
    }

    async update(id: string, data: UpdateDepartmentDto) {
        return await prismaClient.department.update({
            where: { id },
            data,
        });
    }

    async remove(id: string) {
        return await prismaClient.department.delete({ where: { id } });
    }
}
