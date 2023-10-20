import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LoginComponent } from './login/login.component';
import { HomesComponent } from './homes/homes.component';
import { LogoutComponent } from './logout/logout.component';
import { LoggedComponent } from './logged/logged.component';
import { SentformComponent } from './sentform/sentform.component';

const routes: Routes = [{ path: 'fetch-data', component: FetchDataComponent },
{ path: 'login', component: LoginComponent },
{ path: 'logout', component: LogoutComponent },
{ path: 'logged', component: LoggedComponent },
{ path: 'homes', component: HomesComponent },
{ path: 'sentform', component: SentformComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
