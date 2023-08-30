import { Component, Input, OnInit } from '@angular/core';
import { ConfigChart } from '../configuration/configChart';


@Component({
  selector: 'lib-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  chartOptions: any;



  ngOnInit(): void {

  }

  createChart(){
    
  }

}
