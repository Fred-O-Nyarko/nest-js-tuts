import { CanActivate, ExecutionContext, Injectable, Req } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest() as Request;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const role = request.headers['x-role'];

    if (role === 'admin') return true;
    return false;
  }
}
