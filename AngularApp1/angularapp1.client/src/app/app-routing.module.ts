import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LearningComponent } from './learning/learning.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChemistryComponent } from './chemistry/chemistry.component';
import { LoggedComponent } from './logged/logged.component';
import { AuthGuard } from './auth-guard/auth-guard';
import { HeatCostTableComponent } from './heat-cost-table/heat-cost-table.component';

const routes: Routes = [
  { path: 'welcome', component: AppComponent },
  { path: 'learning', canActivate: [AuthGuard],component: LearningComponent },
  { path: 'learning/:id', component: LearningComponent },
  { path: 'chemistry', component: ChemistryComponent },
  { path: 'login', component: LoginComponent }, 
  { path: 'register', component: RegisterComponent },
  { path: 'logged', component: LoggedComponent },
  { path: 'heat-costs', component: HeatCostTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
