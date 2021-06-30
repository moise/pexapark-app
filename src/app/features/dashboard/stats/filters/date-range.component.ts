import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Range} from "../../../../models/types";

@Component({
	selector: 'app-date-range',
	template: `
      <mat-form-field appearance="fill">
          <mat-label>Enter a date range</mat-label>
          <mat-date-range-input [formGroup]="range" [rangePicker]="picker">
              <input matStartDate formControlName="start" placeholder="Start date">
              <input matEndDate formControlName="end" placeholder="End date">
          </mat-date-range-input>
          <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
          <mat-date-range-picker #picker></mat-date-range-picker>
      </mat-form-field>
	`,
	styles: []
})
export class DateRangeComponent implements OnInit {

	range = new FormGroup({
		start: new FormControl(),
		end: new FormControl()
	});

	@Output() onDateChange: EventEmitter<Range> = new EventEmitter<Range>()


	ngOnInit(): void {
		this.range.valueChanges.subscribe((range: Range) => {
			if (range.start && range.end) {
				this.onDateChange.emit(range);
			}
		})
	}

}
