/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ProductsServices } from "../services/products.service";

@Controller("products")
export class ProductsController {
    constructor(private productsServices: ProductsServices) {}

    @Post()
    addProduct(
        @Body("title") prodTitle: string,
        @Body("description") prodDesc: string,
        @Body("price") ProdPrice: number
    ): any {
        return this.productsServices.addProduct(prodTitle, prodDesc, ProdPrice);
    }
    @Get()
    getProducts() {
        return this.productsServices.getallProducts();
    }
    @Get(":id")
    getOneProduct(@Param("id") prodId: string) {
        return this.productsServices.getOneProduct(prodId);
    }
    @Patch(":id")
    updateProduct(
        @Param("id") prodId: string,
        @Body("title") prodTitle: string,
        @Body("description") prodDesc: string,
        @Body("price") ProdPrice: number
    ) {
        this.productsServices.updateProduct(prodId, prodTitle, prodDesc, ProdPrice);
        return null;
    }
    @Delete(":id")
    deleteProduct(@Param("id") prodId: string) {
        this.productsServices.deleteProduct(prodId);
    }
}
