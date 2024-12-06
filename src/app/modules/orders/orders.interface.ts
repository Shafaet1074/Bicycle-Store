import { Schema, model, connect } from 'mongoose';

export  type Order= {
  email:string,
  product:number,
  quantity:number,
  totalPrice:number
}