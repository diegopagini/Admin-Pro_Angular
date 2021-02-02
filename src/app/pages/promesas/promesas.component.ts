import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css'],
})
export class PromesasComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    //Se crea una promesa con el new Promise, y luego se resuelve y lo que trae el cuerpo se atrapa con then o el error con catch
    // const promesa = new Promise((resolve, reject) => {
    //   if (true) {
    //     resolve('Hola Mundo!');
    //   } else {
    //     reject('Algo salio mal');
    //   }
    // });

    // promesa
    //   .then((mensaje) => {
    //     //Es lo que resuelve la promesa.
    //     console.log(mensaje);
    //   })
    //   .catch((error) => console.log('error en mi promesa', error));

    this.getUsuarios().then((usuarios) => {
      console.log(usuarios);
    });
  }

  getUsuarios() {
    const promesa = new Promise((resolve) => {
      fetch('https://reqres.in/api/users')
        .then((resp) => resp.json())
        .then((body) => resolve(body.data));
    });
    return promesa;
  }
}
