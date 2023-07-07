import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'Anson', email: 'anson@anson.com' },
    { username: 'Cory', email: 'cory@anson.com' },
    { username: 'Greg', email: 'greg@anson.com' },
  ];

  fetchUsers(sortDesc?: boolean) {
    if (sortDesc) {
      return this.fakeUsers.reverse();
    }
    return this.fakeUsers;
  }

  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return userDetails;
  }

  fetchUserById(id: number) {
    return this.fakeUsers[id];
  }
}
