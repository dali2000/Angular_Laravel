import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { importType } from '@angular/compiler/src/output/output_ast';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { InscriComponent } from './components/inscri/inscri.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from './components/user/user.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { AddServerComponent } from './components/add-server/add-server.component';
import { Ec2Component } from './components/ec2/ec2.component';
import { S3Component } from './components/s3/s3.component';
import { SComponent } from './components/s/s.component';
import { ServComponent } from './components/serv/serv.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { Ec2EditComponent } from './components/ec2-edit/ec2-edit.component';
import { S3EditComponent } from './components/s3-edit/s3-edit.component';
import { PreviewServerComponent } from './components/preview-server/preview-server.component';
import { SEditComponent } from './components/s-edit/s-edit.component';
import { DashboredComponent } from './components/dashbored/dashbored.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { ProfilComponent } from './components/profil/profil.component';
const appRoutes:Routes = [
 
  { path: 'User', component:UserComponent },
  { path: 'Inscri', component:InscriComponent},
  { path: 'EditUser/:id', component:UserEditComponent},
  { path: 'login', component:LoginComponent},
  { path: 'preview/:id', component:PreviewServerComponent},
  { path: 'dashbored', component:DashboredComponent},
  {path: 'profil' , component:ProfilComponent},
  { path: '', component:LoginComponent},
  { path: 'servers',
   component:ServComponent,},
  { path: 'addServer' ,
   component:AddServerComponent,
   children: [
     {path: 'ec2', component: Ec2Component},
     {path: 's3', component: S3Component},
     {path: 'sqs', component:SComponent},
     {path: 'ec2-edit/:id', component:Ec2EditComponent},
     {path: 's3-edit/:id', component:S3EditComponent},
     {path: 's-edit/:id', component:SEditComponent}
   ]
  },

];

@NgModule({
  declarations: [
    AppComponent,
    
    NavbarComponent,
    InscriComponent,

    UserComponent,
    UserEditComponent,
    AddServerComponent,
    Ec2Component,
    S3Component,
   
    SComponent,
   
    ServComponent,
   
    SidebarComponent,
   
    LoginComponent,
   
    Ec2EditComponent,
   
    S3EditComponent,
   
    PreviewServerComponent,
   
    SEditComponent,
   
    DashboredComponent,
   
    ProfilComponent,
   
   
   
    
   
   


    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GoogleChartsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
