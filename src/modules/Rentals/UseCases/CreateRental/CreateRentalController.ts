import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateRentalUseCase } from './CreateRentalUseCase';

export class CreateRentalController{
  async handle(req: Request, res: Response): Promise<Response>{

  const {car_id, expect_return_Date}= req.body
  const {id}= req.user

  const createRentalUseCase= container.resolve(CreateRentalUseCase)
  const rental = await createRentalUseCase.execute({
    car_id, expect_return_Date, user_id: id
  })

  return res.status(200).json(rental)
  
  }
}