import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {reducer as fromReducer} from './state/reducers/farms.reducer';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BackendInterceptor} from "./mock/backend.interceptor";
import {FeaturesModule} from "./features/features.module";
import {EffectsModule} from '@ngrx/effects';
import {FarmsEffects} from './state/effects/farms.effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		FeaturesModule,
		StoreModule.forRoot({
			app: fromReducer
		}),
		EffectsModule.forRoot([FarmsEffects]),
		StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production})
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: BackendInterceptor,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
