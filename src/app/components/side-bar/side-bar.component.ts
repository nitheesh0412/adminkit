
import * as feather from 'feather-icons';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements
OnInit, AfterViewInit {


  constructor(){

  }
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    feather.replace();
  }
}
