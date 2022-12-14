import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FotterComponent } from './components/fotter/fotter.component';
import { RegisterComponent } from './components/register/register.component';
import { StudentsComponent } from './components/students/students.component';
import { OptionsComponent } from './components/options/options.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouteActivatedService } from './services/route-activated.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ContentComponent } from './components/content/content.component';
import { LoginActivatedService } from './services/login-activated.service';
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import { HttpIntercepterBaseAuthService } from './services/http/http-intercepter-base-auth.service';
const routes: Routes = [
{path:'register', component:RegisterComponent,canActivate:[LoginActivatedService]},
{path:'content', component:ContentComponent,canActivate:[LoginActivatedService]},
{path:'options',  component:OptionsComponent,canActivate:[RouteActivatedService] },
{path:'options/:id',  component:OptionsComponent,canActivate:[RouteActivatedService] },
{path:'students', component:StudentsComponent,canActivate:[RouteActivatedService]},
{path:'students/:name', component:StudentsComponent,canActivate:[RouteActivatedService]},
{path:'', component:StudentsComponent,canActivate:[RouteActivatedService]},
{path:'**', component:StudentsComponent,canActivate:[RouteActivatedService]} 

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FotterComponent,
    RegisterComponent,
    StudentsComponent,
    OptionsComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbPaginationModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass: HttpIntercepterBaseAuthService,multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
