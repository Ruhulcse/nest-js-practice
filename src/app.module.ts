import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemperatureModule } from './temperature/temperature.module';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      // ssl: {
      //   ca: fs.readFileSync(process.env.SSL_CA_CERTIFICATES),
      // },
      autoLoadEntities: true,
      // Only enable this option if your application is in development,
      // otherwise use TypeORM migrations to sync entity schemas:
      // https://typeorm.io/#/migrations
      synchronize: true,
    }),

    TemperatureModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
