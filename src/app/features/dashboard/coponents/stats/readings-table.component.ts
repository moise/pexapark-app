import {Component, Input, OnInit} from '@angular/core';
import {Farm, Reading} from "../../../../models/types";

@Component({
  selector: 'app-readings-table',
  template: `
    <div>
      <div *ngFor="let reading of readings">
        {{reading}}
      </div>
    </div>
  `,
  styles: [
  ]
})
export class ReadingsTableComponent implements OnInit {

  @Input() readings: Reading[] | null = [];

  constructor() { }

  ngOnInit(): void {
  }

}
