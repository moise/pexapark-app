import {Injectable} from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor, HttpResponse
} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import farms from './farms';


@Injectable()
export class BackendInterceptor implements HttpInterceptor {

	constructor() {
	}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		if (request.method === 'GET' && request.url === `${window.location.origin}/api/farms`) {
			return of(new HttpResponse({
				status: 200,
				body: farms
			}))
		}

		return next.handle(request);
	}
}
