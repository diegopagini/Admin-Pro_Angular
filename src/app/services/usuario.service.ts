import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterFrom } from '../interfaces/register-form.interface';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  crearUsuario(formData: RegisterFrom) {
    return this.http.post(`${base_url}/usuarios`, formData);
  }
}
