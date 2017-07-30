import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

export class CanDeactivateGuard implements CanDeactivate<any> {
    canDeactivate() {
        return new Observable<boolean>(observer => {
            let result = window.confirm('是否确定离开vip？');
            observer.next(result);
            observer.complete();
        });
    }
}