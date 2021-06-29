import {Component, OnInit, Output} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Farm, Reading} from "../../models/types";
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
                      <app-farms-list
                              class="farm-list-wrapper" [farmList]="farmList$ | async"
                              (setFarm)="setFarm($event)"></app-farms-list>
                  </mat-card-title>
                  <mat-card-content>
                      <pre>{{farmReadings$ | async | json}}</pre>
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

	farm$: Subject<Farm> = new Subject<Farm>();

	farm: Farm | undefined;

	farmList$: Observable<Farm[]> = new Observable<Farm[]>();

	farmReadings$: Observable<Reading[]> = new Observable<Reading[]>();

	loading: boolean = false;

	constructor(private farmsFacade: FarmsFacade) {
		this.farmList$ = this.farmsFacade.farmList$;
		this.farmReadings$ = this.farmsFacade.farmReadings$;
	}

	ngOnInit(): void {
		this.farmsFacade.getFarms();
		this.farm$.subscribe(farm => this.farm = farm);
		this.farmList$.subscribe(farms => this.farm$.next(farms[0]));
		this.farm$.subscribe(farm => this.farmsFacade.getReadings(farm.id));
	}

	setFarm(farm: Farm) {
		this.farm$.next(farm);
	}
}
