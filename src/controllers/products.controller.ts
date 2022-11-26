import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateProductBody } from "src/dto/products/CreateProductBody.dto";
import {
    GetOneProductResponse,
    GetProductsResponse,
} from "src/dto/products/GetProductsResponse.dto";
import { UpdateProductBody } from "src/dto/products/UpdateProductBody.dto";
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
        @Param("id") id: string,
        @Body() body: UpdateProductBody
    ): Promise<GetOneProductResponse> {
        const product = await this.productsService.updateProduct(id, body);
        return { product };
    }

    @Delete(":id")
    async deleteProduct(@Param("id") prodId: string) {
        await this.productsService.deleteProduct(prodId);
    }
}
