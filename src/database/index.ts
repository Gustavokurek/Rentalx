import { createConnection } from 'typeorm';

createConnection();
await connectionSource.initialize();
