import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component'; 
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { UnloggedUserFrontpageComponent } from './components/unlogged-user-frontpage/unlogged-user-frontpage.component';  

/** ANGULAR MATERIAL */

import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import { FooterComponent } from './components/footer/footer.component';
import { LoggedUserFrontpageComponent } from './components/logged-user-frontpage/logged-user-frontpage.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    SignupComponent,
    LoginComponent,
    UnloggedUserFrontpageComponent,
    FooterComponent,
    LoggedUserFrontpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
