import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GlobalHeaderComponent} from './components/headers/global-header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import {SidenavComponent} from './components/sidenav/sidenav.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";

@NgModule({
	declarations: [
		GlobalHeaderComponent,
		SidenavComponent
	],
	exports: [
		GlobalHeaderComponent,
		MatToolbarModule,
		MatIconModule,
		MatSidenavModule,
		MatListModule,
		SidenavComponent
	],
	imports: [
		CommonModule,
		MatToolbarModule,
		MatIconModule,
		MatSidenavModule,
		MatButtonModule,
		MatListModule,
	]
})
export class SharedModule {
}
