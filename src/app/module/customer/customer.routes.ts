import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { customerController } from './customer.controller';
import { customerValidation } from './customer.validation';

const router = express.Router()

router.post('/',validateRequest(customerValidation.create),customerController.insertIntoDB)

export const customerRoutes = router