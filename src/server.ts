import express from 'express';
import SwaggerUi from 'swagger-ui-express';

import './database';

import { router } from './routes/index';
import './shared/container';
import swaggerFile from './swagger.json';

const app = express();
app.use(express.json());

app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(swaggerFile));

app.use(router);
app.listen(3333, () => {
  console.log('http://localhost:3333/');
});
