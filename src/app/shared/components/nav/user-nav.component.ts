import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'app-user-nav',
	template: `
      <button mat-icon-button class="avatar" color="secondary" [matMenuTriggerFor]="userMenu">
          <img mat-card-avatar [src]="avatar"/>
      </button>
      <mat-menu #userMenu="matMenu">
          <button mat-menu-item>
              <mat-icon>info</mat-icon>
              <span>Account</span>
          </button>
      </mat-menu>
	`,
	styles: [
		`.avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        margin: auto auto 60px;
    }

    .avatar img {
        height: 40px;
        width: auto;
    }`
	]
})
export class UserNavComponent implements OnInit {

	@Input() avatar: string = '';

	constructor() {
	}

	ngOnInit(): void {
	}

}
