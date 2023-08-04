import { IsString, Length, IsEmail } from "class-validator";

export class CreateUserDto {

    @IsString({ message: "Should be string" })
    @IsEmail({}, { message: "Invalid email" })
    readonly email: string;

    @IsString({ message: "Should be string" })
    @Length(4, 16, { message: "Should be chars: 4 < password < 16" })
    readonly password: string;

}