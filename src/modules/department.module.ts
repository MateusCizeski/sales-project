import { Module } from '@nestjs/common';
import { CreateDepartmentController } from 'src/controllers/department/CreateDepartmentController'; 
import { CreateDepartmentService } from 'src/services/department/CreateDepartmentService'; 

@Module({
    controllers: [CreateDepartmentController],
    services: [CreateDepartmentService]
})

export class DepartmentModule {}