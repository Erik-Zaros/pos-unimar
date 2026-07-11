"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const User_1 = require("../../domain/entities/User");
class CreateUserUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(dto) {
        const existngUser = await this.userRepository.findById(dto.id);
        if (existngUser) {
            throw new Error("Este ID de usuário já existe");
        }
        const user = new User_1.User(dto.id, dto.email, dto.displayName, new Date());
        await this.userRepository.save(user);
        return user;
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
