import { getCustomRepository } from "typeorm";
import { MessagesRepository } from "../repositories/MessagesRepository";

interface IMassageCreate {
  admin_id?: string;
  text: string;
  user_id: string;
}

class MessagesServices {
  async create({ admin_id, text, user_id }: IMassageCreate) {
    const messageRepository = getCustomRepository(MessagesRepository);

    const message = messageRepository.create({
      admin_id,
      text,
      user_id,
    });

    await messageRepository.save(message);

    return message;
  }
}

export { MessagesServices };
