import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Farm, Range} from "../../../../models/types";

@Component({
	selector: 'app-filter',
	template: `
      <app-farms-list
							data-cy="farm-select"
              class="farm-list-wrapper filter-item" [farmList]="farmList"
              (setFarm)="setFarm.emit($event)"
      ></app-farms-list>
      <app-date-range
              data-cy="farm-data-range"
							class="filter-item"
							(onDateChange)="setDateRange.emit($event)"
      ></app-date-range>
	`,
	styles: [
		`
        :host {
            display: flex;
            margin-left: auto;
        }
				:host ::ng-deep .mat-form-field-flex {
						padding-top: 3px !important;
						padding-bottom: 3px !important;
				}
        :host ::ng-deep .mat-form-field-infix,
				:host ::ng-deep .mat-form-field-wrapper,
        :host ::ng-deep .mat-form-field-appearance-fill{
						padding-bottom: 0;
						font-size: .8rem;
				}
				:host ::ng-deep .mat-form-field-underline {
						display: none;
				}
				.filter-item {
						display: inline-flex;
				}
				.filter-item + .filter-item {
						margin-left: 1rem;
				}
		`
	]
})
export class FiltersComponent {

	@Input() farmList: Farm[] | null = [];

	@Output() setFarm: EventEmitter<Farm> = new EventEmitter<Farm>();

	@Output() setDateRange: EventEmitter<Range> = new EventEmitter<Range>();
}
