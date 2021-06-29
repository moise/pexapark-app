import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-header',
  template: `
    <mat-toolbar>
      <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
        <mat-icon>menu</mat-icon>
      </button>
      <span>My App</span>
      <span class="example-spacer"></span>
    </mat-toolbar>
  `,
  styles: [
  ]
})
export class GlobalHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
