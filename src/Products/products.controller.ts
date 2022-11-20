/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ProductsServices } from './products.service';

@Controller('products')
export class prodcutsController {
  constructor(private productsServices: ProductsServices) {}
  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') ProdPrice: number,
  ): any {
    return this.productsServices.addProduct(prodTitle, prodDesc, ProdPrice);
  }
  @Get()
  getProducts() {
    return this.productsServices.getallProducts();
  }
  @Get(':id')
  getOneProduct(@Param('id') prodId: string) {
    return this.productsServices.getOneProduct(prodId);
  }
  @Patch(':id')
  updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') ProdPrice: number,
  ) {
    this.productsServices.updateProduct(prodId, prodTitle, prodDesc, ProdPrice);
    return null;
  }
  @Delete(':id')
  deleteProduct(@Param('id') prodId:string){
    this.productsServices.deleteProduct(prodId)
  }
}
