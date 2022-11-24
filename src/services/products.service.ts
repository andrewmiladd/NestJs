import { Injectable } from "@nestjs/common";
import { Product } from "../models/products.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
@Injectable()
export class ProductsService {
    constructor(@InjectModel("Product") private readonly productModel: Model<Product>) {}
    async addProduct(title: string, description: string, price: number) {
        const newProduct = new this.productModel({ title, description, price });
        const result = await newProduct.save();
        return result as Product;
    }
    async getAllProducts() {
        const allProducts = await this.productModel.find();
        return allProducts as Product[];
    }
    async getOneProduct(prodId: string) {
        const product = await this.findProduct(prodId);
        return product;
    }
    async updateProduct(
        prodId: string,
        prodTitle: string,
        prodDescription: string,
        prodPrice: number
    ) {
        const updatedProduct = await this.findProduct(prodId);
        if (prodTitle) {
            updatedProduct.title = prodTitle;
        }
        if (prodDescription) {
            updatedProduct.description = prodDescription;
        }
        if (prodPrice) {
            updatedProduct.price = prodPrice;
        }
        updatedProduct.save();
        return updatedProduct;
    }
    async deleteProduct(prodId: string): Promise<Product> {
        const deletedProduct = await this.findProduct(prodId);
        return deletedProduct.delete();
    }
    async findProduct(id: string): Promise<Product> {
        const product = await this.productModel.findById(id);
        return product;
    }
}
