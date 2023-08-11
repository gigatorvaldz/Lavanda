import { IsString, IsEmail, IsNumber } from "class-validator";

export class ResetPasswordConfirmDto {

    @IsString({ message: "Should be string" })
    @IsEmail({}, { message: "Invalid email" })
    readonly email: string;

    @IsNumber({}, {message: "Should be number"})
    readonly code: number;
}