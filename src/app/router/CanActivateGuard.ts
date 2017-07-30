import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

export class CanActivateGuard implements CanActivate {
    canActivate() {
        console.log('CanActivate拦截!');
        return new Observable<boolean>(observer => {
            let result = window.confirm('是否确定进入vip？');
            observer.next(result);
            observer.complete();
        });
    }
}