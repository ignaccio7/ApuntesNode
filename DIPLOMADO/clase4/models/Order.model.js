import { Schema, model } from "mongoose";

const FoodOrderSchema = Schema({
  // dishes: [{
  //   type: Schema.Types.ObjectId, ref: 'dish',
  //   required: true
  // }],
  // quantity: [{
  //   type: Number,
  //   required: true
  // }],
  /**
   * De esta forma se almacena como:
   * Se podria decir que es mejor al ser un ObjectID esto valida que exista eso en el otro documento
   {
    "_id": {  "$oid": "66393f67840f9c2932d00809"},
    "dishes": [  {    "$oid": "66354f1b40a4e3f0eaf3abb0"  },  {    "$oid": "66354f1b40a4e3f0eaf3abb0"  }],
    "quantity": [  1,  2],
    "client": {  "$oid": "6632a0d7324856f1f7c2c914"},
    "__v": 0
  }
   */

  dishes: [{
    type: Schema.Types.Map, ref: 'dish',
    required: true
  }],
  /**
   * De esta forma se almacena asi pero ya no puede identificar que es un objectid
   {
      "_id": {    "$oid": "6639405befac847c47a5cbab"  },  
      "dishes": [    { "id": "66354f1b40a4e3f0eaf3abb0", "quantity": 1    },
        { "id": "66354f1b40a4e3f0eaf3abb0",      "quantity": 1  }  ],
      "client": { "$oid": "6632a0d7324856f1f7c2c914"  },
      "__v": 0
    }
   */
  client: {
    type: Schema.Types.ObjectId, ref: 'usuarios',
    required: true
  }
})

export default model('orders', FoodOrderSchema)