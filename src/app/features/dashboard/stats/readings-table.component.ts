import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Reading} from "../../../models/types";

@Component({
	selector: 'app-readings-table',
	template: `
      <table *ngIf="!!readings" mat-table [dataSource]="readings" class="mat-elevation-z0">
          <ng-container matColumnDef="date">
              <th mat-header-cell *matHeaderCellDef> Date </th>
              <td mat-cell *matCellDef="let element"> {{element.date}} </td>
          </ng-container>

          <ng-container matColumnDef="factor">
              <th mat-header-cell *matHeaderCellDef> Factor </th>
              <td mat-cell *matCellDef="let element"> {{element.factor}} </td>
          </ng-container>


          <ng-container matColumnDef="totalEnergy">
              <th mat-header-cell *matHeaderCellDef> Produced energy </th>
              <td mat-cell *matCellDef="let element"> {{element.totalEnergy}} </td>
          </ng-container>

          <ng-container matColumnDef="count">
              <th mat-header-cell *matHeaderCellDef> Readings </th>
              <td mat-cell *matCellDef="let element"> {{element.count}} </td>
          </ng-container>

          <ng-container matColumnDef="lostReadings">
              <th mat-header-cell *matHeaderCellDef> Lost readings </th>
              <td mat-cell *matCellDef="let element"> {{element.lostReadings}} </td>
          </ng-container>


          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>
	`,
	styles: [
			`
				.mat-table {
						width: 100%;
				}
			`
	]
})

export class ReadingsTableComponent implements OnInit, OnChanges {


	@Input() readings: Reading[] | null = null;

	displayedColumns: string[] = ['date', 'factor', 'count', 'totalEnergy', 'lostReadings'];

	dataSource: Reading[] = [];

	constructor() {
	}

	ngOnInit(): void {

	}

	ngOnChanges(changes: SimpleChanges): void {
		const e = '';
	}

}
