import { IsString, IsEmail } from "class-validator";

export class ForgotPasswordDto {

    @IsString({ message: "Should be string" })
    @IsEmail({}, { message: "Invalid email" })
    readonly email: string;
}