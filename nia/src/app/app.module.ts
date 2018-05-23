import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { SimpleTimer } from 'ng2-simple-timer';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { ExamComponent } from './exam/exam.component';
import { TimerComponent } from './timer/timer.component';
import { HeaderComponent } from './header/header.component';
import { NewtimerComponent } from './newtimer/newtimer.component';
import { SecondsToDateTimePipe } from './_helpers/index';





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
    SecondsToDateTimePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
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
