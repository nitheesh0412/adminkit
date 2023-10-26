import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UsersComponent } from './components/users/users.component';
import { EdituserComponent } from './components/edituser/edituser.component';
import { UserComponent } from './components/user/user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateuserComponent } from './components/createuser/createuser.component';
import { CartComponent } from './components/cart/cart.component';
import { MarketComponent } from './components/market/market.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { EditproductComponent } from './components/editproduct/editproduct.component';
import { CreateproductComponent } from './components/createproduct/createproduct.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path : "users",
    component : UsersComponent
  },
  {
    path: "users",
    children: [
      {
        path : "",
        component : UsersComponent
      },
      {
        path: "create",
        component: CreateuserComponent
      },
      {
        path: "view/:userId",
        component : UserComponent // for viewing user
      },
      {
        path : "edit/:userid",
        component : EdituserComponent
      }
    ]
  },
  {
    path : "cart",
    component : CartComponent
  },
  {
    path : "market",
    component : MarketComponent
  },
  {
    path : "products",
    component : ProductsComponent
  },
  {
    path : "product",
    children : [
      {
        path : "",
        component : ProductsComponent
      },
      {
        path : "create",
        component : CreateproductComponent
      },
      {
        path : "view/:id",
        component : ProductComponent
      },
      {
        path : "edit/:id",
        component : EditproductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
