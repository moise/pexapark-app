import {Component, OnInit} from '@angular/core';
import {DrawerService} from "../../../services/drawer.service";

@Component({
	selector: 'app-global-header',
	template: `
      <mat-toolbar class="mat-elevation-z1">
          <mat-toolbar-row>
							<h6>Dashboard</h6>
          </mat-toolbar-row>
          <mat-toolbar-row>
              <h2 class="welcome">Welcome back, Jhon Doe</h2>
          </mat-toolbar-row>
      </mat-toolbar>
	`,
	styles: [
		`mat-toolbar {
        background-color: white;
				padding-left: 20px;
    }
		.drawer-button {
				width: auto;
				height: auto;
		}
		.welcome {
				font-weight: 300;
				font-size: 24px;
				color: rgba(0,0,0,.7);
		}`
	]
})
export class GlobalHeaderComponent {

	constructor(
			private drawerService: DrawerService
	) {
	}

	setDrawer(): void {
		this.drawerService.opened$.next(!this.drawerService.opened)
	}

}
