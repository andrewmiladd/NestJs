import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "../models/products.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
@Injectable()
export class ProductsService {
    products: Product[] = [];
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
    updateProduct(prodId: string, prodTitle: string, prodDescription: string, prodPrice: number) {
        // const { product, productIndex } = this.findProduct(prodId);
        // const updatedProduct = { ...product };
        // if (prodTitle) {
        //     updatedProduct.title = prodTitle;
        // }
        // if (prodDescription) {
        //     updatedProduct.description = prodDescription;
        // }
        // if (prodPrice) {
        //     updatedProduct.price = prodPrice;
        // }
        // this.products[productIndex] = updatedProduct;
    }
    deleteProduct(prodId: string) {
        const index = this.findProduct(prodId)[1];
        // const restOfProducts = this.products.filter(
        //   (product) => product.id != this.products[index].id,
        // );
        // this.products = restOfProducts;
        const restOfProducts = this.products.splice(index, 1);
        this.products = restOfProducts;
    }
    async findProduct(id: string): Promise<Product> {
        const product = await this.productModel.findById(id);
        return product;
    }
}
