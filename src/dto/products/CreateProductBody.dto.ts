import { IsNumber, IsOptional, IsString, MaxLength, Min } from "class-validator";
export class CreateProductBody {
    @IsString()
    @MaxLength(100)
    public title: string;

    @IsString()
    @IsOptional()
    public description: string;

    @IsNumber()
    @Min(0)
    public price: number;
}
