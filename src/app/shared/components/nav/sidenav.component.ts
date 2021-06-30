import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from "@angular/cdk/layout";
import {DrawerService} from "../../../services/drawer.service";
import {image} from 'faker';

@Component({
	selector: 'app-sidenav',
	template: `
      <mat-drawer-container [hasBackdrop]="false">
          <mat-drawer #drawer mode="side" opened class="mat-elevation-z0">
              <header>
                  <a href="/">
                      <img class="logo" src="assets/logo3.svg" />
									</a>
              </header>
							<app-nav></app-nav>
              <button mat-icon-button class="avatar" color="secondary">
                  <img mat-card-avatar [src]="avatar" />
              </button>
          </mat-drawer>
          <mat-drawer-content [style.margin-left]="drawerService.opened ? '60px' : 0">
              <ng-content></ng-content>
          </mat-drawer-content>
      </mat-drawer-container>
	`,
	styles: [
		`
				:host {
						display: flex;
						height: calc(100%);
				}
        .avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            overflow: hidden;
						margin: auto auto 100px;
        }
        .avatar img {
            height: 40px;
            width: auto;
        }
				
        .logo {
						height: 40px;
						width: 40px;
				}
				mat-drawer-container {
						background-color: transparent;
						width: 100%;
				}
				mat-drawer {
						width: 60px;
						box-shadow: none !important;
						border-right: 1px solid rgba(0, 0, 0, .1);
				}
        mat-drawer header {
						display: flex;
						flex-direction: column;
						align-items: center;
						padding-top: 0.5rem;
				}
		`
	]
})
export class SidenavComponent implements OnDestroy {

	avatar: string = image.avatar();

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

	setDrawer(): void {
		this.drawerService.opened$.next(!this.drawerService.opened)
	}

}
