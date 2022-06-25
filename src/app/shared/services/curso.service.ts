import { Curso } from './../../model/curso';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private readonly API = '/assets/cursosX.json'; //endpoint do servidor

  constructor(private httpClient: HttpClient) { }

  listarTodos(): Observable<Curso[]>{
    return this.httpClient.get<Curso[]>(this.API); 
  }
}
