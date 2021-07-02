import {FormControl} from "@angular/forms";
import {ApexAxisChartSeries, ApexStroke, ApexXAxis, ApexYAxis} from "ng-apexcharts";

export interface Farm {
    id: string;
    key: string;
    name: string;
}


export interface Reading {
    id: string;
    date: string
    factor: number
    count: number
    totalEnergy: number
    lostReadings: number
}

export interface Range {
    start: FormControl;
    end: FormControl;
}

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: any;
    yaxis: ApexYAxis;
    xaxis: ApexXAxis;
    stroke: ApexStroke;
    tooltip: ApexTooltip;
    dataLabels: ApexDataLabels;
    fill: ApexFill;
    title?: ApexTitleSubtitle;
    responsive: ApexResponsive[];
    plotOptions: ApexPlotOptions;
};