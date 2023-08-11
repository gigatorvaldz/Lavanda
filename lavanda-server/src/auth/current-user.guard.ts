import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from "@nestjs/common";
import {Observable} from "rxjs";
import {JwtService} from "@nestjs/jwt";


@Injectable()
export class CurrentUserGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest();

        try {
            const authHeader = req.headers.authorization;
            const [bearer, token] = authHeader.split(" ");

            if (bearer !== "Bearer" || !token) {
                throw new UnauthorizedException({message: "Auth error"})
            }

            req.user = this.jwtService.decode(token);

            if (req.user.email === req.body.email) {
                return true;
            }

            throw new UnauthorizedException({message: "You have no permissions"})
        } catch (err) {
            throw new UnauthorizedException({message: "Auth error"})
        }
    }

}