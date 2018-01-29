import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Token, mapToken, mapApiBase } from '@caiu/core';
import { EffectsModule } from '@caiu/effects';
import { ErrorsModule, errorsReducer } from '@caiu/errors';
import { EventsModule, EventEffects, eventsReducer } from '@caiu/events';
import { HttpModule, HttpEffects, LookupModule, lookupReducer } from '@caiu/http';
import { routerReducer, RouterModule, RouterEffects } from '@caiu/router';
import { StorageModule, StorageEffects } from '@caiu/storage';
import { StoreModule } from '@caiu/store';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { reducers } from './shared/reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([
      EventEffects,
      HttpEffects,
      RouterEffects,
      StorageEffects,
    ]),
    ErrorsModule.forRoot(),
    EventsModule,
    HttpModule.forRootAsync(mapApiBase, mapToken),
    LookupModule.forRoot(),
    RouterModule.forRoot(),
    SharedModule,
    StorageModule.forRoot('CVIMS_STORE'),
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
