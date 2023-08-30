import { Component, Input, OnInit } from '@angular/core';
import { ConfigChart } from '../configuration/configChart';

@Component({
  selector: 'lib-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  chartOptions: any;



  ngOnInit(): void {

  }

  createChart(){
    

  }

}
