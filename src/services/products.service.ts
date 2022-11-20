/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "../models/products.model";
@Injectable()
export class ProductsService {
    products: Product[] = [];

    addProduct(title: string, desc: string, price: number) {
        const newProduct = new Product(Math.random().toString(), title, desc, price);
        this.products.push(newProduct);

        return newProduct;
    }
    getAllProducts() {
        return [...this.products];
    }
    getOneProduct(prodId: string) {
        const { product } = this.findProduct(prodId);
        return { ...product };
    }
    updateProduct(prodId: string, prodTitle: string, prodDescription: string, prodPrice: number) {
        const { product, productIndex } = this.findProduct(prodId);
        const updatedProduct = { ...product };
        if (prodTitle) {
            updatedProduct.title = prodTitle;
        }
        if (prodDescription) {
            updatedProduct.description = prodDescription;
        }
        if (prodPrice) {
            updatedProduct.price = prodPrice;
        }
        this.products[productIndex] = updatedProduct;
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
    findProduct(id: string) {
        const productIndex = this.products.findIndex(prod => prod.id === id);
        const product = this.products[productIndex];
        if (!productIndex) {
            throw new NotFoundException("Not Found");
        }
        return { product, productIndex };
    }
}
