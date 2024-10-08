import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { SupplierManagementComponent } from './supplier-management/supplier-management.component';

export const routes: Routes = [
    {path: '', component: SupplierManagementComponent},
    {path: 'login',component: LoginFormComponent},
     {path: 'registration',component: RegisterFormComponent},
     {path: 'addProducts',component:AddProductsComponent },
     {path: 'help',component:HelpPageComponent },
     {path:'supplierManagement',component:SupplierManagementComponent}
];
