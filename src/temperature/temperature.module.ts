import { Module } from '@nestjs/common';
import { TemperatureService } from './temperature.service';
import { TemperatureController } from './temperature.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Temperature } from './entities/temperature.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Temperature])],
  controllers: [TemperatureController],
  providers: [TemperatureService],
})
export class TemperatureModule {}
