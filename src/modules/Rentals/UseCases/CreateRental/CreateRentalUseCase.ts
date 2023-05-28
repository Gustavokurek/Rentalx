import { Rental } from '@modules/Rentals/infra/typeorm/entities/Rental';
import { IRentalRepository } from '@modules/Rentals/repositories/IRentalRepository';
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider';
import { AppError } from '@shared/errors/appError';
import { inject, injectable } from 'tsyringe';



interface IRequest {
  car_id: string;
  user_id: string;
  expect_return_Date: Date;
}

@injectable()
export class CreateRentalUseCase {
  constructor(
    @inject('RentalsRepository')
    private rentalRepository: IRentalRepository,
    @inject('DayJsDateProvider')
    private DateProvider: IDateProvider
    ) {}
  async execute({
    user_id,
    expect_return_Date,
    car_id,
  }: IRequest): Promise<Rental> {
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
    const minimumHours= 24
    const datenow= this.DateProvider.dateNow()
    const compare= this.DateProvider.compareInHours(datenow, expect_return_Date)


    if(compare< minimumHours){
      throw new AppError('invalid return time!')
    }
    
    const rental = await this.rentalRepository.create({ 
      user_id,
      expect_return_Date,
      car_id
    })
      
      return rental
    }
}
