import {CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable, Logger} from '@nestjs/common';
import { GoogleService } from './google.service';

@Injectable()
export class GoogleGuard implements CanActivate {
    logger: Logger = new Logger(GoogleGuard.name);

    constructor(private googleservice: GoogleService) {}

    async canActivate(context: ExecutionContext) {
        const req = context.switchToHttp().getRequest();
        const ftoken = req.headers.authorization ? req.headers.authorization.split('Bearer ')[1] : '';
        const ftokenFromBody = req.body.access_token;

        if (ftokenFromBody === undefined) {
            throw new HttpException({status: HttpStatus.UNAUTHORIZED, error: 'Token Is Not Found.'}, HttpStatus.UNAUTHORIZED);
        }

        req.user = await this.googleservice.authTokenVerify(ftokenFromBody);
        const user = req.user;
        if (!user) {
            return false;
        }

        this.logger.debug('Google ok ::');
        return true;
    }
}
