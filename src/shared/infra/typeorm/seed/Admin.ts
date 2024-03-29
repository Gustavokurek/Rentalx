import { hash } from 'bcrypt';
import { createConnection } from 'typeorm';
import { v4 as uuid } from 'uuid';

async function create() {
  const connection = await createConnection();

  const id = uuid();
  const password = await hash('admin', 8);
  await connection.query(
    ` INSERT INTO USERS (id, name, email, password, driver_license, admin, created_at)
      values('${id}', 'admin', 'admin@rentx.com', '${password}', 'XXXXXXXX', true, 'now()')
    `,
  );

  await connection.close();
}

create().then(() => console.log('user admin created'));
