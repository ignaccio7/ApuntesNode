// path: api/order
import { Router } from "express";
import { check } from "express-validator";
import { fieldValidator } from "../middleware/generic.middleware";
import { createOrder } from "../controllers/order.controller";
import { validateJWT } from "../middleware/jwt.middleware";

const routerOrder = Router()

routerOrder.post('/', [
  check('dishes', 'El campo dishes es requerido').not().isEmpty(),
  check('client', 'El campo client es requerido').not().isEmpty(),
  fieldValidator
], createOrder)

export default routerOrder