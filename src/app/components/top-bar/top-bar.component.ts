import * as feather from 'feather-icons';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements
OnInit, AfterViewInit{
  constructor(){

  }
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    feather.replace();
  }
}
