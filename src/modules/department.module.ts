import { Module } from '@nestjs/common';
import { DepartmentController } from 'src/controllers/DepartmentController'; 
import { DepartmentService } from 'src/services/DepartmentService'; 

@Module({
    controllers: [DepartmentController],
    providers: [DepartmentService]
})

export class DepartmentModule {}