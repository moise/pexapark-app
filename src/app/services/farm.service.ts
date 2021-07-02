import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ChartOptions, Farm, Reading} from "../models/types";

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

	readingsToChartOptions(readings: Reading[]): ChartOptions {
		const options = {
			chart: {
				height: 350,
				type: "area"
			},
			plotOptions: {
				bar: {
					dataLabels: {
						position: "top"
					}
				}
			},
			responsive: [
				{
					breakpoint: 480,
					options: {
						legend: {
							position: "bottom",
							offsetX: -10,
							offsetY: 0
						}
					}
				}
			],
			dataLabels: {
				enabled: true,
				formatter: function (val) {
					return val + "%";
				},
				offsetY: -20,
				style: {
					fontSize: "12px",
					colors: ["white"]
				}
			},
			stroke: {
				curve: "smooth"
			},
			series: [
				{
					name: 'Capacity factor',
					data: readings.map(r => r.factor)
				}
			],
			tooltip: {
				enabled: true
			},
			yaxis: {
				max: 100,
				min: 0
			},
			xaxis: {
				type: "category",
				categories: readings.map(r => r.date)
			}
		} as ChartOptions;

		return options;
	}
}
