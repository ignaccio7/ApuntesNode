import { request, response } from "express";
import DishModel from '../models/Dish.model'

async function createDish (req = request, res = response) {
  try {
    // const { name, description, price, picture } = req.body
    const dish = DishModel(req.body)
    await dish.save()
    res.send({
      success: true,
      data: dish,
      message: 'Plato creado satisfactoriamente'
    })
  } catch (error) {
    res.status(500).send({
      success:false,
      message: 'Ha ocurrido un problema en el servidor'
    })
  }
}

async function getAllDishes (req = request, res = response) {
  try {
    const dishes = await DishModel.find()
    return res.status(200).send({
      success:true,
      data: dishes,
      message:'Solicitud exitosa'
    })
  } catch (error) {
    res.status(500).send({
      success:false,
      message: 'Ha ocurrido un problema en el servidor'
    })
  }
}

async function getDishById (req = request, res = response) {

}

export {
  createDish,
  getAllDishes,
  getDishById
}