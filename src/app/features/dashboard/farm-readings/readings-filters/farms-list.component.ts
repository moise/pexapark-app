import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Farm} from "../../../../models/types";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";
import {Store} from "@ngrx/store";

@Component({
	selector: 'app-farms-list',
	template: `
      <form class="farm-picker-form">
          <mat-form-field class="form-field" appearance="fill">
              <mat-label>Search farm</mat-label>
              <input
                      matInput
                      type="text"
                      placeholder="Pick one"
                      [matAutocomplete]="auto"
                      [formControl]="listFormControl"
              >
              <mat-autocomplete autoActiveFirstOption #auto="matAutocomplete">
                  <mat-option (click)="setFarm.emit(farm)" *ngFor="let farm of filteredFarms | async"
                              [value]="farm.name">{{farm.name}}</mat-option>
              </mat-autocomplete>
          </mat-form-field>
      </form>
	`,
	styles: [
	]
})
export class FarmsListComponent implements OnInit {

	@Input() farmList: Farm[] | null = [];

	@Output() setFarm: EventEmitter<Farm> = new EventEmitter<Farm>();

	listFormControl = new FormControl();

	filteredFarms: Observable<Farm[]> = new Observable<Farm[]>();

	ngOnInit(): void {
		this.filteredFarms = this.listFormControl.valueChanges.pipe(
				startWith(''),
				map(value => this._farmFilter(value))
		)
	}


	private _farmFilter(farmName: string) {
		const value = farmName.toLowerCase();

		return this.farmList?.filter(farm => farm.name.toLowerCase().includes(value)) ?? []
	}

}
