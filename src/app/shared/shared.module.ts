import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GlobalHeaderComponent} from './components/headers/global-header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';

@NgModule({
	declarations: [
		GlobalHeaderComponent
	],
	exports: [
		GlobalHeaderComponent,
		MatToolbarModule,
		MatIconModule
	],
	imports: [
		CommonModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule
	]
})
export class SharedModule {
}
