import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css'],
})
export class Grafica1Component implements OnInit {
  public labels1: string[] = ['Pan', 'Refresco', 'Tacos'];
  public labels2: string[] = ['Soda', 'Agua', 'Cerveza'];
  public labels3: string[] = ['Carne', 'Pescado', 'Pollo'];
  public labels4: string[] = ['Maiz', 'Harina', 'Choclo'];

  public data1 = [[10, 15, 40]];
  public data2 = [[20, 15, 30]];
  public data3 = [[30, 10, 23]];
  public data4 = [[7, 18, 27]];

  constructor() {}

  ngOnInit(): void {}
}
