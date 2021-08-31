import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';

import { TypeOrmModule } from '@nestjs/typeorm'; // 👈 import
import config from 'src/config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { user, host, db, password, port } = configService.database;
        return {
          type: 'postgres' as any,
          host,
          port,
          username: user,
          password,
          database: db,
          synchronize: true,
          autoLoadEntities: true,
        };
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
