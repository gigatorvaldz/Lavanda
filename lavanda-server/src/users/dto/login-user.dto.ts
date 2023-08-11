import { IsString, IsEmail } from "class-validator";

export class LoginUserDto {

    @IsString({ message: "Should be string" })
    @IsEmail({}, { message: "Invalid email" })
    readonly email: string;

    @IsString({ message: "Should be string" })
    readonly password: string;
}