import express from 'express';
import { customerRoutes } from '../module/customer/customer.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: "/customers",
    route: customerRoutes
  }
];

moduleRoutes.map(route => {
  router.use(route.path, route.route);
});
export default router;
