import {ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Farm, Range, Reading} from "../../../models/types";
import {Observable} from "rxjs";
import {MediaMatcher} from "@angular/cdk/layout";

@Component({
	selector: 'app-farm-readings',
	template: `
      <mat-card class="card">
          <mat-card-content>
              <header>
                  <h3 class="card-title-farm-name">{{farm?.name}}</h3>
                  <app-filter
													*ngIf="mobileQuery.matches"
                          [farmList]="farmList"
                          (setFarm)="onSelectFarm.emit($event)"
                          (setDateRange)="onDateRange.emit($event)"
                  ></app-filter>
									<app-filters-mobile
                          *ngIf="!mobileQuery.matches"
                          [farmList]="farmList"
                          (onSelectFarm)="onSelectFarm.emit($event)"
                          (onDateRange)="onDateRange.emit($event)"
									></app-filters-mobile>
              </header>
              <app-readings-table
                      [readings]="farmReadings"
              ></app-readings-table>
          </mat-card-content>
      </mat-card>
	`,
	styles: [
		`.card {
        padding: 0;
    }

    header {
        display: flex;
        margin: 0;
        padding: 15px;
				align-items: center;
    }

    .card-title-farm-name {
        margin: 0;
    }`
	]
})
export class FarmReadingsComponent implements OnDestroy {

	@Input() farm: Farm | undefined;
	@Input() farmList: Farm[] | null = null;
	@Input() farmReadings: Reading[] | null = null;

	@Output() onSelectFarm: EventEmitter<Farm> = new EventEmitter<Farm>();
	@Output() onDateRange: EventEmitter<Range> = new EventEmitter<Range>();

	mobileQuery: MediaQueryList;
	private readonly _mobileQueryListener: () => void;

	constructor(
			changeDetectorRef: ChangeDetectorRef,
			media: MediaMatcher,
	) {
		this.mobileQuery = media.matchMedia('(min-width: 1024px)');
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);
	}

	ngOnDestroy(): void {
		this.mobileQuery.removeListener(this._mobileQueryListener);
	}
}
