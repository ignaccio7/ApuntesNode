// path: api/dish
import { Router } from "express";
import { createDish, getAllDishes, getDishById } from "../controllers/dish.controller.js";

import { check } from "express-validator";
import { fieldValidator } from "../middleware/dish.middleware.js";

const routerDish = Router()

routerDish.get('/', getAllDishes)
routerDish.get('/:id', getDishById)
routerDish.post('/', [
  // ejecutaremos estas funciones y luego iremos a createDish
  check('name', 'El campo nombre es requerido').not().isEmpty(),
  check('description', 'El campo descripción es requerido').not().isEmpty(),
  check('price', 'El campo precio es requerido').not().isEmpty(),
  check('picture', 'La foto es requerida').not().isEmpty(),
  fieldValidator
],createDish)

export default routerDish