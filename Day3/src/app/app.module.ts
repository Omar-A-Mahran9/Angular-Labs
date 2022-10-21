import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ParentComponent } from './parent/parent.component';
import { Chiled1Component } from './chiled1/chiled1.component';
import { Chiled2Component } from './chiled2/chiled2.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ParentComponent,
    Chiled1Component,
    Chiled2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
