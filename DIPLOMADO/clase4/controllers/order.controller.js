import { request, response } from "express";
import OrderModel from "../models/Order.model";

const createOrder = async (req=request, res=response) => {
  try {
    const order = OrderModel(req.body)
    await order.save()
    return res.status(201).send({
      success:true,
      message:"Orden creada",
      order
    })
  } catch (error) {
    res.status(500).send({
      success:false,
      message: 'Ha ocurrido un problema en el servidor'
    })
  }
}

export {
  createOrder
}