import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { CreateUserDTO } from "../dtos/CreateUserDTO";

export class CreateUserUseCase {
    constructor(private userRepository: UserRepository) {}

    public async execute(dto: CreateUserDTO): Promise<User> {
        const existngUser = await this.userRepository.findById(dto.id);
        if (existngUser) {
            throw new Error("Este ID de usuário já existe");
        }

        const user = new User (
            dto.id,
            dto.email,
            dto.displayName,
            new Date()
        )
        await this.userRepository.save(user);
        return user;
    }
}