import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { importType } from '@angular/compiler/src/output/output_ast';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { InscriComponent } from './components/inscri/inscri.component';
import { FormsModule } from '@angular/forms';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { UserComponent } from './components/user/user.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { ConComponent } from './components/con/con.component';

const appRoutes:Routes = [
 
  { path: 'Employee', component:EmployeesComponent },
  { path: 'User', component:UserComponent },
  { path: 'Inscri', component:InscriComponent},
  { path: 'edit/:id', component:EmployeeEditComponent},
  { path: 'EditUser/:id', component:UserEditComponent},
  { path: 'con' , component:ConComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    NavbarComponent,
    InscriComponent,
    EmployeeEditComponent,
    UserComponent,
    UserEditComponent,
    ConComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
