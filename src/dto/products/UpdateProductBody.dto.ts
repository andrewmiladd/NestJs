import { IsNumber, IsOptional, IsString, MaxLength, Min } from "class-validator";

export class UpdateProductBody {
    @IsString()
    @MaxLength(100)
    @IsOptional()
    public title: string;

    @IsString()
    @IsOptional()
    public description: string;

    @IsNumber()
    @Min(0)
    @IsOptional()
    public price: number;
}
