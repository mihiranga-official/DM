import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AddProductsComponent } from './add-products/add-products.component';

export const routes: Routes = [
    {path: '', component: AddProductsComponent},
    {path: 'login',component: LoginFormComponent},
     {path: 'registration',component: RegisterFormComponent},
     {path: 'addProducts',component:AddProductsComponent }
];
