// path: api/auth -> 4:00
import { Router } from "express";
import { check } from "express-validator";
import { fieldValidator } from "../middleware/generic.middleware";
import { renewToken, singin } from "../controllers/auth.controller";
import { validateJWT } from "../middleware/jwt.middleware";

const routerAuth = Router()

routerAuth.post('/', [
  check('email', 'El campo email es requerido').not().isEmpty(),
  check('password', 'El campo password es requerido').not().isEmpty(),
  fieldValidator
], singin)

routerAuth.get('/renew',validateJWT, renewToken)

export default routerAuth