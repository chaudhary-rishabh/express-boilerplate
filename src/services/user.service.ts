import { UserModel } from '../models/User.model.js';

export class UserService {
  async registerUser(data: { username: string; email: string; password: string }) {
    return await UserModel.create(data);
  }

  async getUserById(id: string) {
    return await UserModel.findById(id);
  }
}