import { Component } from '@angular/core';
interface Analytics{
  type: string,
  data_feather: string,
  value: number,
  growth: number
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  anal1 : Analytics = {
    type: "Sales",
    data_feather: "truck",
    value: 2.382,
    growth: -3.65
  }
  anal2 : Analytics = {
    type: "Earnings",
    data_feather: "dollar-sign",
    value: 21.300,
    growth: 6.65
  }
  anal3 : Analytics = {
    type: "Visitors",
    data_feather: "users",
    value: 14.212,
    growth: 5.25
  }
  anal4 : Analytics = {
    type: "Orders",
    data_feather: "shopping-cart",
    value: 64,
    growth: -2.25
  }
}
