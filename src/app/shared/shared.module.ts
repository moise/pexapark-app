import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GlobalHeaderComponent} from './components/headers/global-header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import {SideNavComponent} from './components/nav/side-nav.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {NavComponent} from './components/nav/nav.component';
import {MatBadgeModule} from "@angular/material/badge";
import {MatMenuModule} from "@angular/material/menu";
import { UserNavComponent } from './components/nav/user-nav.component';

@NgModule({
	declarations: [
		GlobalHeaderComponent,
		SideNavComponent,
		NavComponent,
  UserNavComponent
	],
	exports: [
		GlobalHeaderComponent,
		MatToolbarModule,
		MatIconModule,
		MatSidenavModule,
		MatListModule,
		SideNavComponent,
	],
	imports: [
		CommonModule,
		MatToolbarModule,
		MatIconModule,
		MatSidenavModule,
		MatButtonModule,
		MatListModule,
		MatBadgeModule,
		MatMenuModule
	]
})
export class SharedModule {
}
