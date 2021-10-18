import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UnloggedUserFrontpageComponent } from './components/unlogged-user-frontpage/unlogged-user-frontpage.component';
import { LoggedUserFrontpageComponent } from './components/logged-user-frontpage/logged-user-frontpage.component';
const routes: Routes = [
  { path: '', component: UnloggedUserFrontpageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'mainPage', component: LoggedUserFrontpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
