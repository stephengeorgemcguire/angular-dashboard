import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS } from '../../Shared/chart.colors';

const LINE_CHAR_SAMPLE_DATA: any[] = [
  { data: [ 12, 14, 17, 38, 13, 54 ], label: "Sentiment Analysis" },
  { data: [ 52, 34, 17, 48, 53, 33 ], label: "Image Recognition" },
  { data: [ 32, 24, 47, 88, 23, 53 ], label: "Forecasting" }
];

const LINE_CHART_LABELS: string[] = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun' ];


@Component( {
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: [ './line-chart.component.css' ]
} )
export class LineChartComponent implements OnInit
{

  constructor() { }
  public lineChartData: any[] = LINE_CHAR_SAMPLE_DATA;
  public lineChartLabels: any[] = LINE_CHART_LABELS;
  public lineChartType = "line";
  public lineChartLegend = true;
  public lineChartColors = LINE_CHART_COLORS;
  /**
   * lineChartOptions
   */
  public lineChartOptions: any = {
    responsive: true
  };

  ngOnInit()
  {
  }

}
