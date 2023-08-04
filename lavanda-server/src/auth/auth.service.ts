import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
    login(userDto: CreateUserDto) {
        throw new Error('Method not implemented.');
    }
    registration(userDto: CreateUserDto) {
        throw new Error('Method not implemented.');
    }
}
