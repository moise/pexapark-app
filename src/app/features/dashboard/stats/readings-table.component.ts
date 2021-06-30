import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Reading} from "../../../models/types";

@Component({
	selector: 'app-readings-table',
	template: `
      <table *ngIf="!!readings" mat-table [dataSource]="readings" class="mat-elevation-z0">
          <ng-container matColumnDef="date">
              <th mat-header-cell *matHeaderCellDef> Date</th>
              <td mat-cell *matCellDef="let element"> {{element.date}} </td>
          </ng-container>

          <ng-container matColumnDef="count">
              <th class="cel-align-center" mat-header-cell *matHeaderCellDef> Readings (lost)</th>
              <td class="cel-align-center" mat-cell *matCellDef="let element">
                  <div [ngClass]="getLostClass(element.lostReadings)" class="readings-count">
                      {{element.count}}
                      <span *ngIf="element.lostReadings > 0">({{element.lostReadings}})</span>
                  </div>
              </td>
          </ng-container>

          <ng-container matColumnDef="totalEnergy">
              <th class="cel-align-center" mat-header-cell *matHeaderCellDef> Produced energy (daily MW)</th>
              <td class="cel-align-center" mat-cell *matCellDef="let element"> {{element.totalEnergy}} </td>
          </ng-container>

          <ng-container matColumnDef="factor">
              <th class="cel-align-center" mat-header-cell *matHeaderCellDef> Performance</th>
              <td class="cel-align-center performance-cell" [ngClass]="getPerformanceClass(element.factor)" mat-cell *matCellDef="let element"> <span>{{element.factor}}%</span></td>
          </ng-container>

          <ng-container matColumnDef="actions">
              <th class="cel-align-center" mat-header-cell *matHeaderCellDef></th>
              <td class="cel-align-center" mat-cell *matCellDef="let element">
                  <app-row-actions></app-row-actions>
              </td>
          </ng-container>

          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>
	`,
	styles: [
		`mat-table {
        font-weight: 300;
    }

    .cel-align-right {
        display: flex;
        padding: 21px 0;
        justify-content: flex-end;
    }

    tr.mat-row {
        height: 40px;
        border-color: red;
    }

    .cel-align-center {
        text-align: center;
    }

    .readings-count {
        color: #01b301;
    }

    .performance-cell span {
        display: inline-block;
        padding: 3px 12px;
        border-radius: 4px;
        background-color: rgba(0, 0, 0, .1);
    }

    .performance-good span {
        background-color: rgba(27, 255, 0, 0.3);
        color: rgba(23, 167, 6, 1);
    }

    .performance-warning span {
        background-color: rgba(255, 237, 20, 0.35);
        color: rgba(184, 156, 90, 0.8);
    }

    .performance-bad span {
        background-color: rgba(230, 17, 17, 0.2);
        color: rgba(230, 17, 17, 0.8);
    }

    .lost-readings-danger {
        color: red;
    }

    .lost-readings-warning {
        color: orange;
    }

    .mat-table {
        width: 100%;
    }

    .mat-cell {
        border-bottom-color: rgba(82, 63, 105, .06)
    }
		`
	]
})

export class ReadingsTableComponent {


	@Input() readings: Reading[] | null = null;

	displayedColumns: string[] = ['date', 'totalEnergy', 'count', 'factor', 'actions'];

	dataSource: Reading[] = [];

	constructor() {
	}

	getLostClass(loss: number): string {
		if (loss > 0 && loss < 4) {
			return 'lost-readings-warning'
		} else if (loss >= 4) {
			return 'lost-readings-danger'
		}

		return '';
	}

	getPerformanceClass(performance: number) {
		if (performance > 0 && performance <= 45) {
			return 'performance-bad'
		} else if (performance > 45 && performance <= 75) {
			return 'performance-warning'
		} else if (performance >= 76) {
			return 'performance-good'
		}

		return '';
	}

}
