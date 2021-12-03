import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UnloggedUserFrontpageComponent } from './components/unlogged-user-frontpage/unlogged-user-frontpage.component';
import { LoggedUserFrontpageComponent } from './components/logged-user-frontpage/logged-user-frontpage.component';
import { UnitListComponent } from './components/unit-list/unit-list.component';
import { LanguageListComponent } from './components/language-list/language-list.component';
import { UnitCreationComponent } from './components/unit-creation/unit-creation.component';
import { StudyZoneComponent } from './components/study-zone/study-zone.component';
import { UnitViewComponent } from './components/unit-view/unit-view.component';
import { UnitEditComponent } from './components/unit-edit/unit-edit.component';

const routes: Routes = [
  { path: '', component: UnloggedUserFrontpageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'mainPage/:username', component: LoggedUserFrontpageComponent },
  { path: 'myUnits', component: UnitListComponent},
  { path: 'myLanguages', component: LanguageListComponent},
  { path: 'newUnit', component: UnitCreationComponent},
  { path: 'updateUnit/:id', component: UnitEditComponent },
  { path: 'studyZone/:id', component: StudyZoneComponent},
  { path: 'unitView/:id', component: UnitViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
