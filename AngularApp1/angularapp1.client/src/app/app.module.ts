import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearningComponent } from './learning/learning.component';
import { BackendService } from './services/backend.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SessionService } from './services/session.service';
import { ChemistryComponent } from './chemistry/chemistry.component';
import { ElementsService } from './services/elements.service';
import { AccountService } from './services/account.service';

@NgModule({
  declarations: [
    AppComponent,
    LearningComponent,
    LoginComponent,
    RegisterComponent,
    NavigationComponent,
    ChemistryComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [BackendService, SessionService, ElementsService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
