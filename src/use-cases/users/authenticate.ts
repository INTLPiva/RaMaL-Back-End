import { UserRepository } from '../../repositories/users-repository';
import { compare } from 'bcryptjs';
import { User } from '@prisma/client';

interface AuthenticateUseCaseRequest {
    email: string;
    password: string;
}

interface AuthenticateUseCaseResponse {
    user: User;
}

export class AuthenticateUseCase {
    constructor(
        private usersRepository: UserRepository,
    ) {}

    async execute({ email, password }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw new Error('User does not exists');
        }

        const doesPasswordMatches = await compare(password, user.password);

        if (!doesPasswordMatches) {
            throw new Error('Email or Password is not correct')
        }

        return {
            user
        };
    }
}