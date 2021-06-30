import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from "@angular/cdk/layout";
import {DrawerService} from "../../../services/drawer.service";

@Component({
	selector: 'app-sidenav',
	template: `
      <mat-drawer-container [hasBackdrop]="false">
          <mat-drawer #drawer [opened]="drawerService.opened" class="mat-elevation-z0">
              <header>
									
              </header>
          </mat-drawer>
          <mat-drawer-content [style.margin-left]="drawerService.opened ? '40px' : 0">
              <ng-content></ng-content>
          </mat-drawer-content>
      </mat-drawer-container>
	`,
	styles: [
		`
				:host {
						display: flex;
						height: calc(100% - 64px);
				}
				mat-drawer-container {
						background-color: transparent;
						width: 100%;
				}
				mat-drawer {
						width: 40px;
				}
        mat-drawer-content {
            padding: 12px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
		`
	]
})
export class SidenavComponent implements OnDestroy {

	mobileQuery: MediaQueryList;

	private readonly _mobileQueryListener: () => void;

	fillerNav = Array.from({length: 5}, (_, i) => `icon ${i + 1}`);

	constructor(
			changeDetectorRef: ChangeDetectorRef,
			media: MediaMatcher,
			readonly drawerService: DrawerService
	) {
		this.mobileQuery = media.matchMedia('(max-width: 600px)');
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);
	}

	ngOnDestroy(): void {
		// this.mobileQuery.removeListener(this._mobileQueryListener);
	}

}
