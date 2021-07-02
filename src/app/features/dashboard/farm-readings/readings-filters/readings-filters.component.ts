import {ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Farm, Range, Reading} from "../../../../models/types";
import {MediaMatcher} from "@angular/cdk/layout";

@Component({
  selector: 'app-readings-filters',
  template: `
    <app-filter
        data-cy="stats-filters"
        *ngIf="mobileQuery.matches"
        [farmList]="farmList"
        (setFarm)="onSelectFarm.emit($event)"
        (setDateRange)="onDateRange.emit($event)"
    ></app-filter>
    <app-filters-mobile
        data-cy="stats-filters-mobile"
        *ngIf="!mobileQuery.matches"
        [farmList]="farmList"
        (onSelectFarm)="onSelectFarm.emit($event)"
        (onDateRange)="onDateRange.emit($event)"
    ></app-filters-mobile>
  `,
  styles: [
  ]
})
export class ReadingsFiltersComponent implements OnDestroy {

  @Input() farm: Farm | undefined;
  @Input() farmList: Farm[] | null = null;
  @Input() farmReadings: Reading[] | null = null;

  @Output() onSelectFarm: EventEmitter<Farm> = new EventEmitter<Farm>();
  @Output() onDateRange: EventEmitter<Range> = new EventEmitter<Range>();

  mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;


  constructor(
      changeDetectorRef: ChangeDetectorRef,
      media: MediaMatcher,
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 1024px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
