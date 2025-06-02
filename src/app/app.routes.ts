import { Routes } from '@angular/router';
import { ProList } from './pro-list/pro-list';
import { ProDetails } from './pro-details/pro-details';
import { Login } from './login/login';
import { Register } from './register/register';
import { ProCard } from './pro-card/pro-card';
import { Notfound } from './notfound/notfound';
import { Cart } from './cart/cart';

export const routes: Routes = [
    {path:'product', component:ProList},
    {path:'product/:id', component:ProDetails},
    {path:'login', component:Login},
    {path:'register', component:Register},
    {path:'cart', component:Cart},
    {path:'**', component:Notfound}
];
