import { Request, Response, NextFunction } from 'express';
import { UserService } from '../services/user.service.js';

export class UserController {
  constructor(private userService = new UserService()) {}

  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.userService.registerUser(req.body);
      res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  };

  getProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.params.id;
      const result = await this.userService.getUserById(userId);
      if (!result) return res.status(404).json({ message: 'User not found' });
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };
}