import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FarmsListComponent} from './dashboard/stats/filters/farms-list.component';
import {MatCardModule} from "@angular/material/card";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {ReadingsTableComponent} from './dashboard/stats/readings-table.component';
import {DateRangeComponent} from './dashboard/stats/filters/date-range.component';
import {FilterComponent} from './dashboard/stats/filters/filter.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import { RowActionsComponent } from './dashboard/stats/row-actions.component';
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
	declarations: [
		DashboardComponent,
		FarmsListComponent,
		ReadingsTableComponent,
		DateRangeComponent,
		FilterComponent,
  RowActionsComponent
	],
	exports: [
		MatCardModule,
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
		MatTableModule,
		MatIconModule,
		MatMenuModule,
		MatButtonModule
	]
})
export class FeaturesModule {
}
