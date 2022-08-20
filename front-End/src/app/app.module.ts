import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FotterComponent } from './components/fotter/fotter.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FotterComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
