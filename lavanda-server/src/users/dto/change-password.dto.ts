import { IsEmail, IsString } from "class-validator";

export class ChangePasswordDto {

    @IsString({ message: "Should be string" })
    @IsEmail({}, { message: "Invalid email" })
    readonly email: string;

    @IsString({ message: "Should be string" })
    readonly password: string;
}