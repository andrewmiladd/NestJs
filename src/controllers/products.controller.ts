import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateProductBody } from "src/dto/products/CreateProductBody.dto";
import {
    GetOneProductResponse,
    GetProductsResponse,
} from "src/dto/products/GetProductsResponse.dto";
import { ProductsService } from "../services/products.service";

@Controller("products")
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    @Post()
    async addProduct(@Body() body: CreateProductBody): GetOneProductResponse["product"] {
        const newProduct = await this.productsService.addProduct(
            body.title,
            body.description,
            body.price
        );
        return newProduct;
    }
    @Get()
    async getProducts(): GetProductsResponse["products"] {
        const products = await this.productsService.getAllProducts();
        return products;
    }
    @Get(":id")
    async getOneProduct(@Param("id") prodId: string): GetOneProductResponse["product"] {
        const product = await this.productsService.getOneProduct(prodId);
        return product;
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
