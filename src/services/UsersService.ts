import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class UserService {
  async create(email: string) {
    const usersRepository = getCustomRepository(UsersRepository);

    // Verificar se usuário existe
    const usersExists = await usersRepository.findOne({
      email,
    });

    if (usersExists) {
      return usersExists;
    }

    const user = usersRepository.create({
      email,
    });

    await usersRepository.save(user);

    return user;
  }
}

export { UserService };
