import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AbstractComponent } from './abstract/abstract.component';
import { NameCropPipe } from '././_pipes/name-crop.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { AddAbstractComponent } from './add-abstract/add-abstract.component';
import { AddComponent1Component } from './add-component1/add-component1.component';
import { AddComponent2Component } from './add-component2/add-component2.component';

import { ComponentInfo1Component } from './component-info1/component-info1.component';
import { ComponentInfo2Component } from './component-info2/component-info2.component';

import { Module1Component } from './module1/module1.component';
import { Module2Component } from './module2/module2.component';
import { Module3Component } from './module3/module3.component';
import { Module4Component } from './module4/module4.component';
import { Module5Component } from './module5/module5.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NameCropPipe ,
    FooterComponent,
    HeaderComponent,
    RegisterComponent,
    HomeComponent,
    ForgotPasswordComponent,
    AbstractComponent,
    AddAbstractComponent,
    AddComponent1Component,
    AddComponent2Component,
    ComponentInfo1Component,
    ComponentInfo2Component,
    Module1Component,
    Module2Component,
    Module3Component,
    Module4Component,
    Module5Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
