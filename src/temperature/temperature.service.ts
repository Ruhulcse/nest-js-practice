import { InjectRepository } from '@nestjs/typeorm';
import {
  BadRequestException,
  HttpStatus,
  Inject,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateTemperatureDto } from './dto/create-temperature.dto';
import { UpdateTemperatureDto } from './dto/update-temperature.dto';
import { Temperature } from './entities/temperature.entity';

@Injectable()
export class TemperatureService {
  constructor(
    @InjectRepository(Temperature)
    private temperetureRepository: Repository<Temperature>,
  ) {}

  async create(createTemperatureDto: CreateTemperatureDto) {
    try {
      const result = await this.temperetureRepository.save(
        createTemperatureDto,
      );
      if (result == null) {
        throw new BadRequestException('data not found');
      }
      return {
        message: 'data created succesfully',
        data: result,
      };
    } catch (error) {
      throw new BadRequestException('something wrong');
    }
  }

  async findAll() {
    try {
      const result = await this.temperetureRepository.find();
      if (result == null) {
        throw new NotFoundException('data not found');
      }
      return {
        message: 'data found',
        data: result,
      };
    } catch (error) {
      throw new BadRequestException('something wrong');
    }
  }

  async findOne(id: number) {
    try {
      const result = await this.temperetureRepository.findOneBy({
        id: id,
      });
      if (result == null) {
        throw new NotFoundException('data not found');
      }
      return {
        message: 'data found',
        data: result,
      };
    } catch (error) {
      throw new BadRequestException('something wrong');
    }
  }

  async update(id: number, updateTemperatureDto: UpdateTemperatureDto) {
    try {
      const result = await this.temperetureRepository.update(
        id,
        updateTemperatureDto,
      );
      if (result == null) {
        throw new BadRequestException('not updated');
      }
      return {
        message: 'data updated successfully',
        data: result,
      };
    } catch (error) {
      throw new BadRequestException('something wrong');
    }
  }

  async remove(id: number) {
    try {
      const result = this.temperetureRepository.delete(+id);
      if (result == null) {
        throw new BadRequestException('data not deleted');
      }
      return {
        message: 'data deleted',
        data: result,
      };
    } catch (error) {
      throw new BadRequestException('something wrong');
    }
  }
}
