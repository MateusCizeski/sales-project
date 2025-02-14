import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { DepartmentService } from 'src/services/DepartmentService';
import { CreateDepartmentDto, UpdateDepartmentDto } from 'src/dtos/Department.dto';

@Controller('departments')
export class DepartmentController {
    constructor(private readonly departmentService: DepartmentService) {}

    @Get()
    async findAll() {
        return await this.departmentService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return await this.departmentService.findById(id);
    }

    @Post()
    async create(@Body() data: CreateDepartmentDto) {
        return await this.departmentService.create(data);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() data: UpdateDepartmentDto) {
        return await this.departmentService.update(id, data);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.departmentService.remove(id);
    }
}
