import { Controller, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateDepartmentService } from 'src/services/department/CreateDepartmentService';
import { UpdateDepartmentService } from 'src/services/department/UpdateDepartmentService';
import { RemoveDepartmentService } from 'src/services/department/RemoveDepartmentService';

@Controller('/departments')
export class DepartmentsController {
    constructor(
        private readonly createDepartmentService: CreateDepartmentService,
        private readonly updateDepartmentService: UpdateDepartmentService,
        private readonly removeDepartmentService: RemoveDepartmentService
    ) {}

    @Post()
    async create(@Body('name') name: string) {
        return await this.createDepartmentService.execute(name);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body('name') name: string) {
        return await this.updateDepartmentService.execute(id, name);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.removeDepartmentService.execute(id);
    }
}
