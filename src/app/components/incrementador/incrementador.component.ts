import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css'],
})
export class IncrementadorComponent implements OnInit {
  @Input('valor') progreso: number = 50;
  @Input() btnClass: string = 'btn-primary';

  //Con las '' es posible cambiar el nombre de la propiedad. En lugar de progreso, se va a llamar valor para renombrar en el html
  // @Input() progreso: number = 50;

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor >= 0) {
      this.valorSalida.emit(100);
      return (this.progreso = 100);
    } else if (this.progreso <= 0 && valor < 0) {
      this.valorSalida.emit(0);
      return (this.progreso = 0);
    }
    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);
  }

  onChange(nuevoValor: number) {
    if (nuevoValor >= 100) {
      this.progreso = 100;
    } else if (nuevoValor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }
    this.valorSalida.emit(this.progreso);
  }
}
