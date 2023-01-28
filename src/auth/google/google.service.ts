/* eslint-disable @typescript-eslint/no-var-requires */
import {HttpException, HttpStatus, Injectable, Logger} from '@nestjs/common';
import {HttpService} from '@nestjs/axios';
import {firstValueFrom} from 'rxjs';

@Injectable()
export class GoogleService {
    logger: Logger = new Logger(GoogleService.name);
    constructor(private httpService: HttpService) {}
    
    // 토큰 검증
    async authTokenVerify(token: string) {
        try {
            const obj = await firstValueFrom(
                this.httpService.get(`https://www.googleapis.com/oauth2/v2/userinfo?access_token=${token}`, {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                }),
                
            );
            console.log(JSON.stringify(obj.data));
            return JSON.stringify(obj.data);
        } catch (err) {
            console.log('authTokenVerify err::', err);
            throw new HttpException({status: HttpStatus.UNAUTHORIZED, error: 'Token is invalid.'}, HttpStatus.UNAUTHORIZED);
        }
    }

}
