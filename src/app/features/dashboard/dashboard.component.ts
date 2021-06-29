import {Component, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {Farm} from "../../models/types";
import {FarmsFacade} from "./farms-facade.service";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";

@Component({
	selector: 'app-dashboard',
	template: `
      <mat-grid-list cols="1" rowHeight="600px">
          <mat-grid-tile rowspan="1" colspan="1">
              <mat-card class="card">
                  <mat-card-title>
                      <h3 class="card-title-farm-name">{{farm?.name}}</h3>
											<app-farms-list class="farm-list-wrapper" [farmList]="farmList$ | async" (setFarm)="setFarm($event)"></app-farms-list>
									</mat-card-title>
                  <mat-card-content>
                      
                  </mat-card-content>
              </mat-card>
          </mat-grid-tile>
      </mat-grid-list>
	`,
	styles: [
			`.card {
					width: 90%
			}
			.mat-card-title {
					display: flex;
					margin: 0;
			}
      .card-title-farm-name {
					margin: 0;
			} 
			.farm-list-wrapper {
          display: flex;
          margin-left: auto;
          margin-bottom: 0;
			}
			`
	]
})
export class DashboardComponent implements OnInit {

	farmList$: Observable<Farm[]> = new Observable<Farm[]>();

	farm?: Farm;


	constructor(
			private farmsFacade: FarmsFacade,
			private httpClient: HttpClient
	) {
		this.farmList$ = this.farmsFacade.farmList$;
	}

	ngOnInit(): void {
		this.farmsFacade.getFarms();
		this.farmList$.subscribe(farms => this.farm = farms[0]);
		this.httpClient.post(`${window.location.origin}/api/farms/readings`, {}).subscribe(res => {
			console.log(res);
		})
	}

	setFarm(farm: Farm) {
		this.farm = farm;
	}

}
