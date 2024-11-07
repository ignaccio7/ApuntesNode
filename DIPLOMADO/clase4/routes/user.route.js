// path: api/users
import { Router } from "express";
import { createUser, getAllUsers, getById } from "../controllers/user.controller.js";

const routerUser = Router()

routerUser.get('/', getAllUsers)
routerUser.get('/:id', getById)
routerUser.post('/', createUser)

export default routerUser