import { IsBoolean, IsInt, IsOptional } from 'class-validator';

export class CreateTemperatureDto {
  @IsOptional()
  @IsInt()
  id: number;

  @IsInt()
  temperature: number;

  @IsInt()
  humidity: number;

  @IsOptional()
  @IsBoolean()
  occupancy: boolean;
}
