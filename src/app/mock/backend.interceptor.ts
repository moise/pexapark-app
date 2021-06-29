import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import farms from './farms';
import readings from './readings';
import {delay} from "rxjs/operators";


@Injectable()
export class BackendInterceptor implements HttpInterceptor {

	constructor() {
	}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		if (request.method === 'GET') {
			return this.handleGetRequests(request, next).pipe(
					delay(500)
			);
		}

		if (request.method === 'POST') {
			return this.handlePostRequests(request, next).pipe(
					delay(500)
			);
		}

		return next.handle(request);
	}

	private handleGetRequests(request: HttpRequest<unknown>, next: HttpHandler) {

		if (request.url.endsWith("/farms")) {
			return of(new HttpResponse({status: 200, body: farms}))
		}

		return next.handle(request);
	}

	private handlePostRequests(request: HttpRequest<unknown>, next: HttpHandler) {
		if (request.url.endsWith("/readings")) {
			// @ts-ignore
			const i = !!request.body?.range;
			return of(new HttpResponse({status: 200, body: readings(i)}))
		}

		return next.handle(request);

	}
}
