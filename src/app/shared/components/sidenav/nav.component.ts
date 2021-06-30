import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-nav',
	template: `
      <mat-list>
          <mat-list-item>
              <button mat-icon-button color="secondary">
                  <mat-icon>menu_open</mat-icon>
              </button>
          </mat-list-item>
          <mat-list-item class="active">
              <button mat-icon-button color="primary">
                  <mat-icon>home</mat-icon>
              </button>
          </mat-list-item>
          <mat-list-item>
              <button mat-icon-button color="secondary">
                  <mat-icon>query_stats</mat-icon>
              </button>
          </mat-list-item>
          <mat-list-item>
              <button mat-icon-button color="secondary">
                  <mat-icon>settings</mat-icon>
              </button>
          </mat-list-item>
          <mat-list-item>
              <button mat-icon-button color="secondary">
                  <mat-icon>tune</mat-icon>
              </button>
          </mat-list-item>
          <mat-list-item>
              <button mat-icon-button color="secondary">
                  <mat-icon>settings_input_hdmi</mat-icon>
              </button>
          </mat-list-item>
      </mat-list>
	`,
	styles: [
		`.active {
        position: relative;
				background-color: #F3F6FF;
    }
    .active:before {
        content: '';
				position: absolute;
				left: 0;
				height: 100%;
				width: 3px;
				background-color: #673ab7;
    }
    .mat-list-item {
        display: flex !important;
        justify-content: center;
				height: 55px !important;
    }`
	]
})
export class NavComponent implements OnInit {

	constructor() {
	}

	ngOnInit(): void {
	}

}
