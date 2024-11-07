import { Schema, model } from "mongoose";

const DishSchema = Schema({
  picture: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  offert: {
    type: Schema.Types.Map, // para indicarle que es un objeto
    required: false,
  },
  isOffert: {
    type: Boolean,
    required: true,
    default: false
  }
  // isDeleted: {
  //   type: Boolean,
  //   default: false
  // }
});

export default model('dish', DishSchema);
