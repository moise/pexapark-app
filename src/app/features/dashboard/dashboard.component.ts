import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {ChartOptions, Farm, Range, Reading} from "../../models/types";
import {FarmsFacade} from "./farms-facade.service";
import {FarmService} from "../../services/farm.service";
import {MediaMatcher} from "@angular/cdk/layout";

@Component({
	selector: 'app-dashboard',
	template: `
      <main>
          <div class="row">
              <div class="col" data-cy="farm-dashboard">
                  <h3 class="card-title-farm-name">
                      <mat-icon>agriculture</mat-icon>
                      {{farm?.name}}</h3>
                  <mat-card class="card" data-cy="farm-card">
                      <mat-card-content data-cy="stats">
                          <app-readings-filters
                                  [farmList]="farmList$ | async"
                                  (onDateRange)="setDateRange($event)"
                                  (onSelectFarm)="setFarm($event)"
                          ></app-readings-filters>

                          <mat-tab-group mat-align-tabs="end" animationDuration="0ms">
                              <mat-tab>
                                  <ng-template mat-tab-label>
                                      <mat-icon color="primary">stacked_line_chart</mat-icon>
                                      <span *ngIf="mobileQuery.matches">Chart View</span>
                                  </ng-template>
                                  <app-readings-chart [chartOptions]="chartOptions"></app-readings-chart>
                              </mat-tab>
                              <mat-tab>
                                  <ng-template mat-tab-label>
                                      <mat-icon color="primary">table_rows</mat-icon>
                                      <span *ngIf="mobileQuery.matches">Table View</span>
                                  </ng-template>
                                  <app-farm-readings
                                          [farm]="farm"
                                          [farmReadings]="farmReadings$ | async"
                                  ></app-farm-readings>
                              </mat-tab>
                          </mat-tab-group>
                      </mat-card-content>
                  </mat-card>
              </div>
          </div>
      </main>
	`,
	styles: [
		`
        :host {
            width: 100%;
        }
        .card-title-farm-name {
            display: flex;
            align-items: center;
        }
        :host mat-tab-group ::ng-deep mat-tab-header {
            z-index: 1;
        }
        mat-icon {
            margin-right: 1rem;
            font-size: 1.1rem;
            display: inline-flex;
            justify-content: center;
            align-items: center;
        }
        mat-tab-body ::ng-deep mat-tab-header .mat-tab-labels {
            justify-content: flex-end;
        }
        app-readings-filters {
            position: absolute;
            top: 6px;
						left: 20px;
						z-index: 9;
        }
        @media screen and (min-width: 600px) {
            app-readings-filters {
		            left: 15px;
            }
        }
        .card {
            padding: 0;
        }
        .row {
            max-width: 100%;
        }
        main {
            padding: 1rem;
        }
        @media screen and (min-width: 768px) {
            main {
                padding: 2.5rem 3rem;
            }
        }
		`
	]
})
export class DashboardComponent implements OnInit, OnDestroy {

	farm: Farm | undefined;

	chartOptions: Partial<ChartOptions> | null = null;

	farm$: Subject<Farm> = new Subject<Farm>();

	range$: Subject<Range> = new Subject<Range>();

	farmList$: Observable<Farm[]> = new Observable<Farm[]>();

	farmReadings$: Observable<Reading[]> = new Observable<Reading[]>();

	mobileQuery: MediaQueryList;

	private readonly _mobileQueryListener: () => void;

	loading: boolean = false;

	constructor(
			private farmsFacade: FarmsFacade,
			private farmService: FarmService,
			changeDetectorRef: ChangeDetectorRef,
			media: MediaMatcher
	) {
		this.farmList$ = this.farmsFacade.farmList$;
		this.farmReadings$ = this.farmsFacade.farmReadings$;

		this.mobileQuery = media.matchMedia('(min-width: 1024px)');
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);
	}

	ngOnInit(): void {
		this.farmsFacade.getFarms();
		this.farm$.subscribe(farm => this.farm = farm);
		this.farmList$.subscribe(farms => this.farm$.next(farms[0]));
		this.farm$.subscribe(farm => this.farmsFacade.getReadings(farm.id));

		this.range$.subscribe(range => this.farmsFacade.getReadings(this.farm?.id!, range))
		this.chartOptionsBuilder();
	}

	setFarm(farm: Farm) {
		this.farm$.next({...farm, name: farm.name.trim()});
	}

	setDateRange(range: Range) {
		this.range$.next(range);
	}

	chartOptionsBuilder() {
		this.farmReadings$.subscribe(readings => (
				this.chartOptions = this.farmService.readingsToChartOptions(readings)
		));
	}

	ngOnDestroy(): void {
		this.mobileQuery.removeListener(this._mobileQueryListener);
	}
}
