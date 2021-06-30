import {Injectable} from '@angular/core';
import {ReplaySubject, Subject} from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class DrawerService {

	opened$: Subject<boolean> = new Subject<boolean>();

	opened: boolean = true;

	constructor() {
		this.opened$.subscribe(state => this.opened = state)
	}
}
