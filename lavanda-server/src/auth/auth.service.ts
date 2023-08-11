import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/user.model';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from "bcryptjs";
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { MailService } from 'src/mail/mail.service';
import { ForgotPasswordDto } from 'src/users/dto/forgot-password.dto';
import { ResetPasswordConfirmDto } from 'src/users/dto/reset-password-confirm.dto';
import { ChangePasswordDto } from 'src/users/dto/change-password.dto';
import { CodeService } from 'src/code/code.service';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService, private mailService: MailService, private codeService: CodeService) {

    }

    async login(userDto: LoginUserDto) {
        const user = await this.validateUser(userDto);
        return this.generateToken(user)
    }


    async registration(userDto: CreateUserDto) {
        const emailCandidate = await this.userService.getUserByEmail(userDto.email)
        const phoneCandidate = await this.userService.getUserByPhone(userDto.phone)
        if (emailCandidate || phoneCandidate) {
            throw new HttpException('User is already exists', HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5);
        const user = await this.userService.createUser({ ...userDto, password: hashPassword })
        return this.generateToken(user)
    }

    async forgotPassword(resetDto: ForgotPasswordDto) {
        const candidate = await this.userService.getUserByEmail(resetDto.email)
        if (!candidate) {
            throw new HttpException('User is not exists', HttpStatus.BAD_REQUEST)
        }

        const code = Math.floor(100000 + Math.random() * 900000);
        await this.codeService.updateCode(candidate.id, code);
        this.mailService.sendCodeMail(resetDto.email, code)
        return "Check email"
    }

    async resetPasswordConfirm({ email, code }: ResetPasswordConfirmDto) {
        const candidate = await this.userService.getUserByEmail(email)
        if (!candidate) {
            throw new HttpException('User is not exists', HttpStatus.BAD_REQUEST)
        }

        const isValid : boolean = await this.codeService.compareCode(candidate.id, code);

        if (isValid) {
            return this.generateToken(candidate);
        }


    }

    async changePassword({ email, password }: ChangePasswordDto) {
        const candidate = await this.userService.getUserByEmail(email)
        if (!candidate) {
            throw new HttpException('User is not exists', HttpStatus.BAD_REQUEST)
        }


        const hashPassword = await bcrypt.hash(password, 5);
        const updatedUser = await this.userService.changePassword(email, hashPassword);

        return updatedUser;
    }

    private async generateToken(user: User) {
        const payload = { email: user.email, id: user.id };
        return {
            token: this.jwtService.sign(payload)
        }
    }


    private async validateUser(userDto: LoginUserDto) {
        const user = await this.userService.getUserByEmail(userDto.email);
        const passwordEquals = await bcrypt.compare(userDto.password, user.password)
        if (user && passwordEquals) {
            return user;
        }
        throw new UnauthorizedException({ message: "Invalid email or password" })
    }
}
