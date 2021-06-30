import {Component} from '@angular/core';
import {DrawerService} from "../../../services/drawer.service";


@Component({
	selector: 'app-global-header',
	template: `
      <mat-toolbar class="mat-elevation-z1">
          <mat-toolbar-row>
              <h6 class="page-title">Dashboard</h6>
              <ul class="user-menu">
                  <li>
                      <button mat-icon-button color="secondary">
                          <mat-icon matBadgeSize="small" matBadge="5">notifications</mat-icon>
                      </button>
                  </li>
              </ul>
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
        padding-right: 10px;
    }
		
    .page-title {
        text-transform: uppercase;
        font-size: .9rem;
        color: #717571;
    }

    .user-menu {
        display: flex;
        margin: 0 0 0 auto;
        list-style: none;
        padding: 0;
    }

    .user-menu li {

    }

    .welcome {
        font-weight: 300;
        font-size: 24px;
        color: rgba(0, 0, 0, .7);
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
