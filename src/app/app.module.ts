import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GeoMapComponent} from './geo-map/geo-map.component';
import {BingMapAPILoader, BingMapAPILoaderConfig, DocumentRef, MapAPILoader, MapModule, WindowRef} from 'angular-maps';

/// <reference path="node_modules/bingmaps/types/MicrosoftMaps/Microsoft.Maps.All.d.ts" />

@NgModule({
  declarations: [
    AppComponent,
    GeoMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapModule.forRoot()
  ],
  providers: [
    {
      provide: MapAPILoader, deps: [], useFactory: MapServiceProviderFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function MapServiceProviderFactory() {
  const bc: BingMapAPILoaderConfig = new BingMapAPILoaderConfig();
  bc.apiKey = 'AtG7cKrMRwKmegoFuZubgbBz3RWXGRozBMcGNbjJ8NNlYHKGO5UDmQECHH_CITOR';
  bc.branch = 'experimental';

  return new BingMapAPILoader(bc, new WindowRef(), new DocumentRef());
}
