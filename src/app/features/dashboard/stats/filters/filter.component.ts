import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Farm, Range} from "../../../../models/types";

@Component({
	selector: 'app-filter',
	template: `
      <app-farms-list
              class="farm-list-wrapper filter-item" [farmList]="farmList"
              (setFarm)="setFarm.emit($event)"
      ></app-farms-list>
      <app-date-range
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
				.filter-item {
						display: inline-flex;
				}
				.filter-item + .filter-item {
						margin-left: 1rem;
				}
		`
	]
})
export class FilterComponent {

	@Input() farmList: Farm[] | null = [];

	@Output() setFarm: EventEmitter<Farm> = new EventEmitter<Farm>();

	@Output() setDateRange: EventEmitter<Range> = new EventEmitter<Range>();
}
