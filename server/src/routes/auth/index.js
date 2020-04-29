import { Router } from 'express';
import loginController from '../../controllers/auth/login';
import loginValidator from '../../validators/auth/login';

const { login } = loginController;
const { validateLogin } = loginValidator;

const route = Router();

route.post('/login', validateLogin, login);

export default route;
