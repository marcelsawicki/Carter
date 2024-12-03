import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LoginComponent } from './login/login.component';
import { HomesComponent } from './homes/homes.component';
import { LogoutComponent } from './logout/logout.component';
import { LoggedComponent } from './logged/logged.component';
import { RegisterComponent } from './register/register.component';
import { RegisteredComponent } from './registered/registered.component';
import { QuestionsComponent } from './questions/questions.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
{ path: 'welcome', component: HomeComponent },
{
  path: 'products',
  loadComponent: () => import('./products/products-list/product-list.component').then(c => c.ProductListComponent)
},
{
  path: 'cart',
  loadComponent: () => import('./cart/cart-shell/cart-shell.component').then(c => c.CartShellComponent)
},
{
  path: 'penalty-shooter',
  loadComponent: () => import('./penalty-shooter/penalty-shooter.component').then(c => c.PenaltyShooterComponent)
},
{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
{ path: 'fetch-data', component: FetchDataComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'registered', component: RegisteredComponent },
{ path: 'logout', component: LogoutComponent },
{ path: 'logged', component: LoggedComponent },
{ path: 'questions', component: QuestionsComponent },
{ path: 'homes', component: HomesComponent },
{ path: '**', component: PageNotFoundComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
