import {Component, Input} from '@angular/core';
import {Farm, Reading} from "../../../models/types";

@Component({
	selector: 'app-farm-readings',
	template: `
      <app-readings-table data-cy="stats-table" [readings]="farmReadings"></app-readings-table>
	`,
	styles: []
})
export class FarmReadingsComponent {

	@Input() farm: Farm | undefined;
	@Input() farmReadings: Reading[] | null = null;

	constructor() {
	}
}
