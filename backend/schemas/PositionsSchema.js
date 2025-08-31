import { Schema } from "mongoose";

const PositionsSchema = new Schema({
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: Number,
    day: String,
    isLoss: Boolean
});

export { PositionsSchema };
