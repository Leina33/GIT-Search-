import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearcFormComponent } from './sear-form/sear-form.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DateCountPipe } from './date-count.pipe';
// import { NotFoundComponent } from './not-found/not-found.component';
// import { DateCountPipe } from './date-count.pipe';




@NgModule({
  declarations: [
    AppComponent,
    SearcFormComponent,
    AboutComponent,
    NavbarComponent,
    DateCountPipe,
    // NotFoundComponent,
    // DateCountPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }