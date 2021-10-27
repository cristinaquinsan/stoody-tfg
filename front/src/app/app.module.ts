import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { UnloggedUserFrontpageComponent } from './components/unlogged-user-frontpage/unlogged-user-frontpage.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoggedUserFrontpageComponent } from './components/logged-user-frontpage/logged-user-frontpage.component';
import { UnitListComponent } from './components/unit-list/unit-list.component';
import { LanguageListComponent } from './components/language-list/language-list.component';
import { StudyZoneComponent } from './components/study-zone/study-zone.component';
import { UnitCreationComponent } from './components/unit-creation/unit-creation.component';
import { ProfileSettingsComponent } from './components/settings/profile-settings/profile-settings.component';

/** ANGULAR MATERIAL */

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table'
import { MatTooltipModule } from '@angular/material/tooltip';
import { UnitViewComponent } from './components/unit-view/unit-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    SignupComponent,
    LoginComponent,
    UnloggedUserFrontpageComponent,
    FooterComponent,
    LoggedUserFrontpageComponent,
    UnitListComponent,
    LanguageListComponent,
    StudyZoneComponent,
    UnitCreationComponent,
    ProfileSettingsComponent,
    UnitViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatSelectModule,
    MatTableModule,
    MatTooltipModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
