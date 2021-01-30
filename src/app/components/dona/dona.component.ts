import { Component, Input, OnInit } from '@angular/core';
import { Label, MultiDataSet, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css'],
})
export class DonaComponent {
  @Input() title: string = 'Sin titulo';

  @Input('labels') doughnutChartLabels: Label[] = [
    'Label1',
    'Label2',
    'Label3',
  ];
  @Input('data') doughnutChartData: MultiDataSet = [[350, 450, 100]];

  public colors: Color[] = [
    { backgroundColor: ['#6857e6', '#009fee', '#f02059'] },
  ];
}
