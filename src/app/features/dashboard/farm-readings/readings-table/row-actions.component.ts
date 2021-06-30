import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-row-actions',
  template: `
    <button class="action-button" mat-icon-button [matMenuTriggerFor]="menu">
      <mat-icon>more_vert</mat-icon>
    </button>
    <mat-menu #menu="matMenu">
      <button mat-menu-item>
        <mat-icon>info</mat-icon>
        <span>Details</span>
      </button>
      <button mat-menu-item>
        <mat-icon>star_border</mat-icon>
        <span>Mark as favourite</span>
      </button>
    </mat-menu>
  `,
  styles: [
      `.action-button {
        transform: rotate(90deg);
      }`
  ]
})
export class RowActionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
