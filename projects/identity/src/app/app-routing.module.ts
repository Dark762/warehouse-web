import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RecoveryPasswordComponent } from './components/recovery-password/recovery-password.component';

const routes: Routes = [
  { path: 'identity/login', component: LoginComponent },
  { path: 'identity/recovery-password', component: RecoveryPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
