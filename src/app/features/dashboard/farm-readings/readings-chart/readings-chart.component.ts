import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ApexAxisChartSeries, ApexStroke, ApexXAxis, ChartComponent} from "ng-apexcharts";
import {ChartOptions, Reading} from "../../../../models/types";


@Component({
  selector: 'app-readings-chart',
  template: `
    <div class="apex-chart" id="chart"
         *ngIf=" chartOptions &&
         chartOptions.dataLabels && 
         chartOptions.tooltip && 
         chartOptions.stroke &&
         chartOptions.series && 
         chartOptions.xaxis && 
         chartOptions.chart" 
    >
      <apx-chart
          [series]="chartOptions.series"
          [chart]="chartOptions.chart"
          [xaxis]="chartOptions.xaxis"
          [stroke]="chartOptions.stroke"
          [tooltip]="chartOptions.tooltip"
          [dataLabels]="chartOptions.dataLabels"
      ></apx-chart>
    </div>
  `,
  styles: [
      `#chart {
        max-width: 100%;
        max-height: 100%;
      }`
  ]
})
export class ReadingsChartComponent {

  @ViewChild("chart") chart: ChartComponent | undefined;
  @Input() chartOptions: Partial<ChartOptions | null> = null;

  constructor() { }
}