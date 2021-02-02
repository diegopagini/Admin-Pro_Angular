import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, retry, take, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent {
  constructor() {
    // this.retornaUnObservable().subscribe(
    //   (valor) => console.log('subs:', valor),
    //   (err) => console.warn('Error', err),
    //   () => console.info('Obs$ terminado')
    // );

    this.retornaIntevalo().subscribe((valor) => console.log(valor));
  }

  retornaIntevalo(): Observable<number> {
    return interval(500).pipe(
      map((valor) => {
        return valor + 1;
      }),
      filter((valor) => (valor % 2 === 0 ? true : false)),
      take(10)
    );
  }

  retornaUnObservable(): Observable<number> {
    let i = 0;
    return new Observable<number>((observer) => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 5) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 2) {
          observer.error('i llego a 2');
        }
      }, 1000);
    });
  }
}
