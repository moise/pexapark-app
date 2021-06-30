import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Farm, Range, Reading} from "../../models/types";
import {FarmsFacade} from "./farms-facade.service";

@Component({
	selector: 'app-dashboard',
	template: `
      <main>
          <div class="row">
              <div class="col">
                  <app-farm-readings
													(onDateRange)="setDateRange($event)"
													(onSelectFarm)="setFarm($event)"
													[farm]="farm"
													[farmList]="farmList$ | async"
													[farmReadings]="farmReadings$ | async"
									></app-farm-readings>
              </div>
          </div>
      </main>
	`,
	styles: [
		`
				:host {
						width: 100%;
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
export class DashboardComponent implements OnInit {

	farm: Farm | undefined;

	farm$: Subject<Farm> = new Subject<Farm>();

	range$: Subject<Range> = new Subject<Range>();

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
