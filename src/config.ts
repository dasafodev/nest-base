import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      db: process.env.POSTGRES_DB,
      host: process.env.POSTGRES_HOST,
      password: process.env.POSTGRES_PASSWORD,
      port: process.env.POSTGRES_PORT,
      user: process.env.POSTGRES_USER,
    },
    jwtSecret: process.env.JWT_SECRET,
  };
});
