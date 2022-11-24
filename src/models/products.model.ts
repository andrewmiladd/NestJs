import mongoose from "mongoose";
export const ProductSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
});
export interface Product extends mongoose.Document {
    title: string;
    description: string;
    price: number;
}
