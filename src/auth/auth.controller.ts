import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport';
import { GoogleGuard } from './google/google.guard';

@Controller('auth')
export class AuthController {
  @Get('google')
  @UseGuards(GoogleGuard)
  async googleAuth(): Promise<void> {
    // redirect google login page
  }

  @Get('google/callback')
  @UseGuards(GoogleGuard)
  async googleAuthCallback(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<void> {
    // ... 
    const { } = req;
  }
}