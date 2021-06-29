import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Farm, Reading} from "../models/types";

@Injectable({
	providedIn: 'root'
})
export class FarmService {

	constructor(
			private httpClient: HttpClient
	) {
	}

	getFarms() {
		return this.httpClient.get<Farm[]>(`${window.location.origin}/api/farms`)
	}

	getReadings(data: any) {
		return this.httpClient.post<Reading[]>(`${window.location.origin}/api/farms/4/readings`, data)
	}
}
