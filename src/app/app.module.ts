import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AnalyticsDashboardComponent } from './components/analytics-dashboard/analytics-dashboard.component';
import { GraphDashboardComponent } from './components/graph-dashboard/graph-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UsersComponent } from './components/users/users.component';
import { ProductsComponent } from './components/products/products.component';
import { EdituserComponent } from './components/edituser/edituser.component';
import { UserComponent } from './components/user/user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserdataService } from './services/userdata.service';
import { CreateuserComponent } from './components/createuser/createuser.component';
import { MarketComponent } from './components/market/market.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { EditproductComponent } from './components/editproduct/editproduct.component';
import { CreateproductComponent } from './components/createproduct/createproduct.component';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TopBarComponent,
    AnalyticsDashboardComponent,
    GraphDashboardComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    ProductsComponent,
    EdituserComponent,
    UserComponent,
    DashboardComponent,
    CreateuserComponent,
    MarketComponent,
    CartComponent,
    ProductComponent,
    EditproductComponent,
    CreateproductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgChartsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [UserdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
