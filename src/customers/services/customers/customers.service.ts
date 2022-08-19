import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  users = [
    {
      id: 1,
      email: 'danny@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 2,
      email: 'danny1@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 3,
      email: 'danny2@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 4,
      email: 'danny4@gmail.com',
      createdAt: new Date(),
    },
  ];
  findCustomerById(userId: number) {
    return this.users.find((user) => userId === user.id);
  }
}
