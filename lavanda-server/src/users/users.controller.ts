import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {

    }

    @Post()
    @UseGuards(JwtAuthGuard)
    getAll() {
        return this.usersService.getAllUsers();
    }

}
