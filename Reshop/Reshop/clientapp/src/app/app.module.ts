import { HttpClientModule } from '@angular/common/http';
import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LoginComponent } from './login/login.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppData } from './app-data';
import { LogoutComponent } from './logout/logout.component';
import { LoggedComponent } from './logged/logged.component';
import { RegisterComponent } from './register/register.component';
import { QuestionsComponent } from './questions/questions.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';


@NgModule({
  declarations: [
    AppComponent,
    FetchDataComponent,
    LoginComponent,
    LogoutComponent,
    LoggedComponent,
    RegisterComponent,
    QuestionsComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    importProvidersFrom(InMemoryWebApiModule.forRoot(AppData, { delay: 1000 }))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
