import { hash } from 'bcryptjs';
import { User } from '@prisma/client';

import { UserRepository } from '../../repositories/users-repository';

interface CreateUserUseCaseRequest {
    name: string;
    email: string;
    password: string;
}

interface CreateUserUseCaseResponse {
    user: User;
}

export class CreateUserUseCase {
    constructor(private usersRepository: UserRepository) {}

    async execute({
        name, 
        email, 
        password
    }: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
        const hashedPassword = await hash(password, 8);

        const user = await this.usersRepository.create({
            name,
            email,
            password: hashedPassword
        });

        return {
            user
        }
    }
}