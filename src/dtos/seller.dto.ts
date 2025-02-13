export interface CreateSellerRequest {
    name: string;
    email: string;
    birthDate: Date;
    baseSalary: number;
    departmentId: string;
}

export interface UpdateSellerRequest {
    sellerId: string;
    name: string;
    email: string;
    birthDate: Date;
    baseSalary: number;
    departmentId: string;
}
