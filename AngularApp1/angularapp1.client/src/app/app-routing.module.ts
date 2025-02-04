import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LearningComponent } from './learning/learning.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChemistryComponent } from './chemistry/chemistry.component';

const routes: Routes = [
  { path: 'welcome', component: AppComponent },
  { path: 'learning', component: LearningComponent },
  { path: 'learning/:id', component: LearningComponent },
  { path: 'chemistry', component: ChemistryComponent },
  { path: 'login', component: LoginComponent }, 
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
