/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateProductBody } from "src/dto/products/CreateProductBody.dto";
import { GetProductsResponse } from "src/dto/products/GetProductsResponse.dto";
import { ProductsService } from "../services/products.service";

@Controller("products")
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    @Post()
    addProduct(@Body() body: CreateProductBody) {
        return this.productsService.addProduct(body.title, body.description, body.price);
    }
    @Get()
    getProducts(): GetProductsResponse {
        const products = this.productsService.getAllProducts();
        return { products };
    }
    @Get(":id")
    getOneProduct(@Param("id") prodId: string) {
        return this.productsService.getOneProduct(prodId);
    }
    @Patch(":id")
    updateProduct(@Param("id") prodId: string, @Body() body: CreateProductBody) {
        return this.productsService.updateProduct(prodId, body.title, body.description, body.price);
    }
    @Delete(":id")
    deleteProduct(@Param("id") prodId: string) {
        this.productsService.deleteProduct(prodId);
    }
}
