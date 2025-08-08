import { Router } from 'express';
import { UserController } from '../controllers/user.controller.js';
import { validate } from '../middleware/validate.js';
import { registerSchema } from '../validators/user.schema.js';

const router = Router();
const userController = new UserController();

router.post('/register', validate(registerSchema), userController.register);
router.get('/:id', userController.getProfile);

export default router;
