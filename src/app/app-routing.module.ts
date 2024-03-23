import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AbstractComponent } from './abstract/abstract.component';
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

const routes: Routes = [
  { path: '', redirectTo: '/abstract', pathMatch: 'full' },
  { path: 'abstract', component: AbstractComponent },
  { path: "compo_1", component:ComponentInfo1Component},
  { path: "compo_2", component:ComponentInfo2Component },
  {path:"signin",component:LoginComponent},
  {path:"signup",component:RegisterComponent},
  {path:"forgotPassword",component:ForgotPasswordComponent},
  {path:"addAbstract",component:AddAbstractComponent},
  {path:"addComponent_1",component:AddComponent1Component},
  {path:"addComponent_2",component:AddComponent2Component},
  {path:"home",component:HomeComponent},
  {path:"module_1",component:Module1Component},
  {path:"module_2",component:Module2Component},  
  {path:"module_3",component:Module3Component}, 
  {path:"module_4",component:Module4Component},
   {path:"module_5",component:Module5Component},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
