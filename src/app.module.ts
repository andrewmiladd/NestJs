import { Module } from "@nestjs/common";
import { AppController } from "./controllers/app.controller";
import { ProductsController } from "./controllers/products.controller";
import { AppService } from "./services/app.service";
import { ProductsService } from "./services/products.service";

@Module({
    controllers: [AppController, ProductsController],
    providers: [AppService, ProductsService],
})
export class AppModule {}
