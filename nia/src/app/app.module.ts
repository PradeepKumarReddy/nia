import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { SimpleTimer } from 'ng2-simple-timer';
import {HttpClientModule} from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService, AuthService } from './_services/index';
import { HomeComponent } from './home/index';
import { ExamComponent } from './exam/exam.component';
import { TimerComponent } from './timer/timer.component';
import { HeaderComponent } from './header/header.component';
import { NewtimerComponent } from './newtimer/newtimer.component';
import { SecondsToDateTimePipe } from './_helpers/index';
import { RegisterComponent } from './register/register.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    ExamComponent,
    TimerComponent,
    HeaderComponent,
    NewtimerComponent,
    SecondsToDateTimePipe,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    AuthService,
    UserService,
    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions,
    SimpleTimer,
    SecondsToDateTimePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
