import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import SwaggerUi from 'swagger-ui-express';

import { AppError } from '@shared/errors/appError';

import '@shared/container';
import swaggerFile from '../../../swagger.json';
import createConnection from '../typeorm';
import { router } from './routes/index';

createConnection();
const app = express();
app.use(express.json());

app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(swaggerFile));

app.use(router);
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ message: err.message });
    }

    return response.status(500).json({
      status: 'Error',
      message: `internal server error - ${err.message}`,
    });
  },
);
export { app };
