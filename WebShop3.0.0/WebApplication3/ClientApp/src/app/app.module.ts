import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { FetchBooksComponent } from './fetch-books/fetch-books.component';
import { LoginPanelComponent } from './login-panel/login-panel.component';
import { UnauthorizedMessageComponent } from './unauthorized-message/unauthorized-message.component';
import { FruitsComponent } from './fruits/fruits.component';
import { FruitsDetalComponent } from './fruits-detal/fruits-detal.component';
import { CartPanelComponent } from './cart-panel/cart-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    FetchBooksComponent,
    LoginPanelComponent,
    UnauthorizedMessageComponent,
    FruitsComponent,
    FruitsDetalComponent,
    CartPanelComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'fetch-books', component: FetchBooksComponent },
      { path: 'login-panel', component: LoginPanelComponent },
      { path: 'unauthorized-message', component: UnauthorizedMessageComponent },
      { path: 'fruits', component: FruitsComponent },
      { path: 'fruits-detal/:id', component: FruitsDetalComponent },
      { path: 'cart-panel', component: CartPanelComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
