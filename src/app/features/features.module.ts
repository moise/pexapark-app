import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FarmsListComponent} from './dashboard/coponents/stats/farms-list.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatOptionModule} from "@angular/material/core";
import {ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {ReadingsTableComponent} from './dashboard/coponents/stats/readings-table.component';


@NgModule({
	declarations: [
		DashboardComponent,
		FarmsListComponent,
		ReadingsTableComponent
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
		MatInputModule
	]
})
export class FeaturesModule {
}
