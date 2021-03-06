import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar.component';
import { YandexMapComponent } from './yandex-map.component';
import { SearchCityComponent } from './search-city.component';

import { WayService } from './way.service';
import { DadataService } from './dadata.service';

//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
      AppComponent,
      SidebarComponent,
      YandexMapComponent,
      SearchCityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
      HttpModule,
      //InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [WayService, DadataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
