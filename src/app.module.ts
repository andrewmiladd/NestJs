import { Module } from "@nestjs/common";
import { AppController } from "./controllers/app.controller";
import { ProductsController } from "./controllers/products.controller";
import { AppService } from "./services/app.service";
import { ProductsServices } from "./services/products.service";

@Module({
    controllers: [AppController, ProductsController],
    providers: [AppService, ProductsServices],
})
export class AppModule {}
