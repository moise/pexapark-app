import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GlobalHeaderComponent} from './components/headers/global-header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import {SidenavComponent} from './components/sidenav/sidenav.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {NavComponent} from './components/sidenav/nav.component';
import {MatBadgeModule} from "@angular/material/badge";

@NgModule({
	declarations: [
		GlobalHeaderComponent,
		SidenavComponent,
		NavComponent
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
		MatBadgeModule
	]
})
export class SharedModule {
}
