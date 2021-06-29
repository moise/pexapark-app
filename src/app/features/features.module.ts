import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FarmsListComponent} from './dashboard/stats/filter/farms-list.component';
import {MatCardModule} from "@angular/material/card";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {ReadingsTableComponent} from './dashboard/stats/readings-table.component';
import {DateRangeComponent} from './dashboard/stats/filter/date-range.component';
import {FilterComponent} from './dashboard/stats/filter/filter.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";


@NgModule({
	declarations: [
		DashboardComponent,
		FarmsListComponent,
		ReadingsTableComponent,
		DateRangeComponent,
		FilterComponent
	],
	exports: [
		MatCardModule
	],
	imports: [
		CommonModule,
		MatCardModule,
		MatOptionModule,
		ReactiveFormsModule,
		MatAutocompleteModule,
		MatInputModule,
		MatDatepickerModule,
		MatFormFieldModule,
		MatNativeDateModule,
	]
})
export class FeaturesModule {
}
