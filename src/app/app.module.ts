import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { BasicLayoutComponent } from './layouts/basic-layout/basic-layout.component';
import { ConfirmAccountComponent } from './pages/auth/confirm-account/confirm-account.component';
import { ResetPasswordComponent } from './pages/auth/reset-password/reset-password.component';
import { ConfirmAccountFormComponent } from './components/forms/confirm-account-form/confirm-account-form.component';
import { ResetPasswordFormComponent } from './components/forms/reset-password-form/reset-password-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BasicLayoutComponent,
    ResetPasswordComponent,
    ConfirmAccountComponent,
    ConfirmAccountFormComponent,
    ResetPasswordFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
