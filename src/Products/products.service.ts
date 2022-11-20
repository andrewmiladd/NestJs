/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';
@Injectable()
export class ProductsServices {
  products: Product[] = [];

  addProduct(title: string, desc: string, price: number) {
    const newProduct = new Product(
      Math.random().toString(),
      title,
      desc,
      price,
    );
    this.products.push(newProduct);

    return 'Product Added !';
  }
  getallProducts() {
    return [...this.products];
  }
  getOneProduct(prodId: string) {
    const product = this.findProduct(prodId)[0];
    return { ...product };
  }
  updateProduct(
    prodId: string,
    prodTitle: string,
    prodDescription: string,
    prodPrice: number,
  ) {
    const [product, productIndex] = this.findProduct(prodId);
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
  findProduct(id: string): [Product, number] {
    const productIndex = this.products.findIndex((prod) => prod.id === id);
    const product = this.products[productIndex];
    if (!productIndex) {
      throw new NotFoundException('Not Found');
    }
    return [product, productIndex];
  }
}
