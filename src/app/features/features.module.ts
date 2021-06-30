import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FarmsListComponent} from './dashboard/farm-readings/readings-filters/farms-list.component';
import {MatCardModule} from "@angular/material/card";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {ReadingsTableComponent} from './dashboard/farm-readings/readings-table/readings-table.component';
import {DateRangeComponent} from './dashboard/farm-readings/readings-filters/date-range.component';
import {FiltersComponent} from './dashboard/farm-readings/readings-filters/filters.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {RowActionsComponent} from './dashboard/farm-readings/readings-table/row-actions.component';
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {FarmReadingsComponent} from './dashboard/farm-readings/farm-readings.component';
import {FiltersMobileComponent} from './dashboard/farm-readings/readings-filters/filters-mobile.component';
import {MatSidenavModule} from "@angular/material/sidenav";


@NgModule({
	declarations: [
		DashboardComponent,
		FarmsListComponent,
		ReadingsTableComponent,
		DateRangeComponent,
		FiltersComponent,
		RowActionsComponent,
		FarmReadingsComponent,
		FiltersMobileComponent
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
		MatButtonModule,
		MatSidenavModule
	]
})
export class FeaturesModule {
}
