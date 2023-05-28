import { CreateRentalController } from '@modules/Rentals/UseCases/CreateRental/CreateRentalController';
import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const rentalsRoute= Router()

const createRentalsController= new CreateRentalController()
rentalsRoute.post('/', ensureAuthenticated, createRentalsController.handle)

export { rentalsRoute };
