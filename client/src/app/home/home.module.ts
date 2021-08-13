import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AboutComponent } from '../about/about.component';
import { PatnersComponent } from '../patners/patners.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AboutComponent,
    PatnersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
})
export class HomeModule { }
