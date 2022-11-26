import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateProductBody } from "src/dto/products/CreateProductBody.dto";
import { Product } from "../models/products.model";
@Injectable()
export class ProductsService {
    constructor(@InjectModel("Product") private readonly productModel: Model<Product>) {}

    async createProduct(body: CreateProductBody): Promise<Product> {
        const newProduct = new this.productModel({
            title: body.title,
            description: body.description,
            price: body.price,
        });
        return await newProduct.save();
    }

    async getAllProducts(): Promise<Product[]> {
        const allProducts = await this.productModel.find();
        return allProducts;
    }

    async getOneProduct(prodId: string) {
        const product = await this.productModel.findById(prodId);
        return product;
    }

    async updateProduct(
        prodId: string,
        prodTitle: string,
        prodDescription: string,
        prodPrice: number
    ) {
        const updatedProduct = await this.productModel.findById(prodId);
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
        const deletedProduct = await this.productModel.findById(prodId);
        return deletedProduct.delete();
    }
}
