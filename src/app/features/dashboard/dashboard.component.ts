import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Farm, Range, Reading} from "../../models/types";
import {FarmsFacade} from "./farms-facade.service";

@Component({
	selector: 'app-dashboard',
	template: `
      <div class="container">
          <div class="row">
              <div class="col">
                  <mat-card class="card">
                      <mat-card-content>
													<header>
                              <h3 class="card-title-farm-name">{{farm?.name}}</h3>
                              <app-filter
                                      [farmList]="farmList$ | async"
                                      (setFarm)="setFarm($event)"
																			(setDateRange)="setDateRange($event)"
                              ></app-filter>
													</header>
                          <pre>{{(farmReadings$ | async | json)}}</pre>
                      </mat-card-content>
                  </mat-card>
              </div>
          </div>
      </div>
	`,
	styles: [
		`.card {
        width: 90%
    }

    header { 
        display: flex;
        margin: 0;
    }

    .card-title-farm-name {
        margin: 0;
    }
		`
	]
})
export class DashboardComponent implements OnInit {

	farm$: Subject<Farm> = new Subject<Farm>();

	range$: Subject<Range> = new Subject<Range>();

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

		this.range$.subscribe(range => this.farmsFacade.getReadings(this.farm?.id!, range))
	}

	setFarm(farm: Farm) {
		this.farm$.next(farm);
	}

	setDateRange(range: Range) {
		this.range$.next(range);
	}
}
