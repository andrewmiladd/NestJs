import { Module } from "@nestjs/common";
import { AppController } from "./controllers/app.controller";
import { ProductsController } from "./controllers/products.controller";
import { AppService } from "./services/app.service";
import { ProductsService } from "./services/products.service";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductSchema } from "./models/products.model";
import { ConfigModule } from "@nestjs/config";

const databaseConnection = `mongodb+srv://andrewmiladd:Mokey1998xx@cluster0.otdkquu.mongodb.net/first-test?retryWrites=true&w=majority`;
@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: "../.env",
        }),
        MongooseModule.forRoot(databaseConnection),
        MongooseModule.forFeature([{ name: "Product", schema: ProductSchema }]),
    ],
    controllers: [AppController, ProductsController],
    providers: [AppService, ProductsService],
})
export class AppModule {}
