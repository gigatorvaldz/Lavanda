import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { ForgotPasswordDto } from 'src/users/dto/forgot-password.dto';
import { ResetPasswordConfirmDto } from 'src/users/dto/reset-password-confirm.dto';
import { CurrentUserGuard } from './current-user.guard';
import { ChangePasswordDto } from 'src/users/dto/change-password.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {

    }

    @Post("/login")
    login(@Body() loginUserDto: LoginUserDto) {
        return this.authService.login(loginUserDto)
    }

    @Post("/registration")
    registration(@Body() userDto: CreateUserDto) {
        return this.authService.registration(userDto)
    }

    @Post("/reset")
    reset(@Body() resetDto: ForgotPasswordDto) {
        return this.authService.forgotPassword(resetDto)
    }

    @Post("/confirm")
    confirm(@Body() resetDto: ResetPasswordConfirmDto) {
        return this.authService.resetPasswordConfirm(resetDto);
    }

    @UseGuards(CurrentUserGuard)
    @Post("/change")
    changePassword(@Body() changePasswordDto: ChangePasswordDto) {
        return this.authService.changePassword(changePasswordDto)
    }
}
