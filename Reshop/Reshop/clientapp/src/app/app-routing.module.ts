import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{ path: 'fetch-data', component: FetchDataComponent },
{ path: 'login', component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
