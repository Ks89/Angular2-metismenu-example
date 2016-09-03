import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import ApplicationComponent from './application/application';
import HomeComponent from './pages/home/home';


@NgModule({
  imports: [BrowserModule,
            RouterModule.forRoot([
              {path: '', component: HomeComponent}
            ])
  ],
  declarations: [
    ApplicationComponent,
    HomeComponent
  ],
  providers: [],
  bootstrap: [ ApplicationComponent ]
})

export class AppModule { }
