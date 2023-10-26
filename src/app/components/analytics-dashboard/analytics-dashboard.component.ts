import * as feather from 'feather-icons';
import { AfterViewInit, Component, OnInit, Input } from '@angular/core';

interface Analytics{
  type: string,
  data_feather: string,
  value: number,
  growth: number
}
@Component({
  selector: 'app-analytics-dashboard',
  templateUrl: './analytics-dashboard.component.html',
  styleUrls: ['./analytics-dashboard.component.css']
})
export class AnalyticsDashboardComponent implements
OnInit, AfterViewInit {
    @Input() analytics : Analytics;

    constructor(){
      this.analytics = {
        type : "",
        data_feather: "",
        value: 0,
        growth: 0
      }
    }
    ngOnInit(): void {
    }
  
    ngAfterViewInit() {
      feather.replace();
    }
}
