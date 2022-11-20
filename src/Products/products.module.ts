/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProductsServices } from './products.service';
import { prodcutsController } from './products.controller';

@Module({
    providers:[ProductsServices],
    controllers:[prodcutsController]
})
export class ProductModule {}