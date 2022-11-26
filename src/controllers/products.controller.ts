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
    async addProduct(@Body() body: CreateProductBody): Promise<GetOneProductResponse> {
        const product = await this.productsService.createProduct(body);
        return { product };
    }

    @Get()
    async getProducts(): Promise<GetProductsResponse> {
        const products = await this.productsService.getAllProducts();
        return { products };
    }

    @Get(":id")
    async getOneProduct(@Param("id") prodId: string): Promise<GetOneProductResponse> {
        const product = await this.productsService.getOneProduct(prodId);
        return { product };
    }

    @Patch(":id")
    async updateProduct(
        @Param("id") prodId: string,
        @Body() body: CreateProductBody
    ): Promise<GetOneProductResponse> {
        const product = await this.productsService.updateProduct(
            prodId,
            body.title,
            body.description,
            body.price
        );
        return { product };
    }

    @Delete(":id")
    async deleteProduct(@Param("id") prodId: string) {
        await this.productsService.deleteProduct(prodId);
    }
}
