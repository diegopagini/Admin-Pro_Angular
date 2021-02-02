import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent {
  constructor() {
    const obs$ = new Observable((observer) => {
      let i = 0;
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 5) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 3) {
          i = 0;
          observer.error('i llego a 2');
        }
      }, 1000);
    });

    obs$.pipe(retry(1)).subscribe(
      (valor) => console.log('subs:', valor),
      (err) => console.warn('Error', err),
      () => console.info('Obs$ terminado')
    );
  }
}
