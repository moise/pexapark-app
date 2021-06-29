import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FarmsListComponent } from './dashboard/coponents/stats/farms-list.component';


@NgModule({
	declarations: [
    DashboardComponent,
    FarmsListComponent
  ],
	imports: [
		CommonModule,
	]
})
export class FeaturesModule {
}
