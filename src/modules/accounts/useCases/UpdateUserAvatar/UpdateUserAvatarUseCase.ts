// add column avatar na tabela de users
// refatorar users com coluna avatar
// configuração de upload
// criar regra de negocio upload
// criar controller

import { inject, injectable } from 'tsyringe';

import { UserRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepositories';
import { deleteFile } from '@utils/file';

interface IRequest {
  user_id: string;
  avatar_file: string;
}

@injectable()
export class UpdateUserAvatarUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: UserRepository,
  ) {}
  async execute({ user_id, avatar_file }: IRequest): Promise<void> {
    const user = await this.userRepository.findById(user_id);

    if (user.avatar) {
      await deleteFile(`./tmp/avatar/${user.avatar}`);
    }

    user.avatar = avatar_file;

    this.userRepository.create(user);
  }
}
