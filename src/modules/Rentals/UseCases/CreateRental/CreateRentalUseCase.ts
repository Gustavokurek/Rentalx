import { IRentalRepository } from '@modules/Rentals/repositories/IRentalRepository';
import { AppError } from '@shared/errors/appError';

interface IRequest {
  car_id: string;
  user_id: string;
  expect_return_Date: Date;
}

export class CreateRentalUseCase {
  constructor(private rentalRepository: IRentalRepository) {}
  async execute({
    user_id,
    expect_return_Date,
    car_id,
  }: IRequest): Promise<void> {
    // não deve ser possível cadastrar um novo aluguel
    // para um usuário com um aluguel ja ativo

    const carUnavailable = await this.rentalRepository.findOpenRentalByCar(
      car_id,
    );
    if (carUnavailable) {
      throw new AppError('Car not available', 400);
    }

    // não deve ser possível cadastrar um novo aluguel
    // para um carro com um aluguel ja ativo

    const rentalOpenToUser = await this.rentalRepository.findOpenRentalByUser(
      user_id,
    );
    if (rentalOpenToUser) {
      throw new AppError('There a rental in progress for User', 400);
    }

    // o aluguel deve ter duração minima de 24h
  }
}