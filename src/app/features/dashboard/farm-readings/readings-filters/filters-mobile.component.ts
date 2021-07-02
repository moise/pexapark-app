import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Farm, Range, Reading} from "../../../../models/types";

@Component({
	selector: 'app-filters-mobile',
	template: `
      <button data-cy="filters-toggle-button" mat-icon-button (click)="drawer.toggle()">
          <mat-icon>filter_list</mat-icon>
      </button>
      <mat-sidenav data-cy="filters-drawer" #drawer [fixedInViewport]="true" position="end" class="example-sidenav" mode="side">
          <button  data-cy="filters-close-button" mat-icon-button (click)="drawer.toggle()">
              <mat-icon>close</mat-icon>
          </button>
          <app-filter
                  [farmList]="farmList"
                  (setFarm)="onSelectFarm.emit($event)"
                  (setDateRange)="onDateRange.emit($event)"
          ></app-filter>
      </mat-sidenav>
	`,
	styles: [
		`:host {
        margin-left: auto;
    }
    :host ::ng-deep app-filter {
        display: flex;
				flex-direction: column;
				padding: 1rem;
    }    
		:host ::ng-deep app-filter .farm-picker-form {
        display: flex;
				flex-direction: column;
				width: 100%;
    }
		:host ::ng-deep app-filter .filter-item {
				margin: 0 0 1rem !important;
    }
    .mat-drawer.mat-drawer-side {
				z-index: 999;
		}`
	]
})
export class FiltersMobileComponent implements OnInit {

	@Input() farm: Farm | undefined;
	@Input() farmList: Farm[] | null = null;
	@Input() farmReadings: Reading[] | null = null;

	@Output() onSelectFarm: EventEmitter<Farm> = new EventEmitter<Farm>();
	@Output() onDateRange: EventEmitter<Range> = new EventEmitter<Range>();

	constructor() {
	}

	ngOnInit(): void {
	}

}
