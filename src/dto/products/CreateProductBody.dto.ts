import { IsNumber, IsString } from "class-validator";
export class CreateProductBody {
    @IsString() public title: string;
    @IsString() public description: string;
    @IsNumber() public price: number;
}
