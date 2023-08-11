import { IsString, IsEmail, IsDateString } from "class-validator";

export class CreateUserDto {

    @IsString({ message: "Should be string" })
    @IsEmail({}, { message: "Invalid email" })
    readonly email: string;

    @IsString({ message: "Should be string" })
    readonly password: string;

    @IsString({ message: "Should be string" })
    readonly firstName: string;

    @IsString({ message: "Should be string" })
    readonly lastName: string;

    readonly phone: string;

    @IsDateString({}, { message: "Invalid date" })
    readonly birthDay: Date;
}