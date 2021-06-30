import { Component, OnInit } from '@angular/core';
import {DrawerService} from "../../../services/drawer.service";

@Component({
  selector: 'app-global-header',
  template: `
    <mat-toolbar>
      <button mat-icon-button (click)="setDrawer()">
        <mat-icon>menu</mat-icon>
      </button>
      <span>My App</span>
      <span class="example-spacer"></span>
    </mat-toolbar>
  `,
  styles: [
  ]
})
export class GlobalHeaderComponent {

  constructor(
      private drawerService: DrawerService
  ) { }

  setDrawer(): void {
    this.drawerService.opened$.next(!this.drawerService.opened)
  }

}
