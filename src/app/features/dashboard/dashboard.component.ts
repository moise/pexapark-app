import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Farm} from "../../models/types";
import {FarmsFacade} from "./farms-facade.service";

@Component({
  selector: 'app-dashboard',
  template: `
    <div>
      <pre>{{ farmList$ | async | json }}</pre>
    </div>
  `,
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  farmList$: Observable<object> | undefined;

  constructor(
      private farmsFacade: FarmsFacade
  ) { }

  ngOnInit(): void {
    this.farmList$ = this.farmsFacade.farmList$;

    this.farmsFacade.getFarms();
  }

}
