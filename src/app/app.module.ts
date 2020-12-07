import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JsonService } from './services/json.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CustomDirectiveComponent } from './customDirectiveComponent/customDirectiveComponent';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangeColorDirective, PhoneToUs } from './directivesAndPipes/colorChange.directive';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './services/authGaurd';
import { FormsComponent } from './formsComponent/formsComponent.component';
import { EmployeeForm } from './forms/employee.form';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { EmployeeDeActivateService } from './services/empCanDeactivate.gaurd';
import { SharedService } from './services/shared.service';
import { Sibling1Component } from './siblingComponents/sibling1';
import { Sibling2Component } from './siblingComponents/sibling2';
import { SiblingsComponent } from './siblingComponents/siblings.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirectiveComponent,Sibling1Component,Sibling2Component,SiblingsComponent,
    ChangeColorDirective,PhoneToUs, HeaderComponent, FormsComponent
  ],
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,

  ],
  providers: [AuthGuard,EmployeeDeActivateService,JsonService,EmployeeForm,SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
