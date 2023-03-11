import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmAccountComponent } from './pages/auth/confirm-account/confirm-account.component';
import { ResetPasswordComponent } from './pages/auth/reset-password/reset-password.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'confirm-account', component: ConfirmAccountComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
