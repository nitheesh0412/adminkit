import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
@Component({
  selector: 'app-graph-dashboard',
  templateUrl: './graph-dashboard.component.html',
  styleUrls: ['./graph-dashboard.component.css']
})
export class GraphDashboardComponent {
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    datasets: [
      {
        data: [ 2000,1562,1580,1892,1587,1923,2566,2448,2805,3438,2917,3327 ],
        // label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(0,0,255,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = false;
}
