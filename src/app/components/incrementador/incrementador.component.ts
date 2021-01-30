import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css'],
})
export class IncrementadorComponent {
  @Input('valor') progreso: number = 50;
  //Con las '' es posible cambiar el nombre de la propiedad. En lugar de progreso, se va a llamar valor para renombrar en el html
  // @Input() progreso: number = 50;

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

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
}
