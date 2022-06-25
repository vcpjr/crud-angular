import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from './../shared/app-material/app-material.module';

import { CursoListagemComponent } from './curso-listagem/curso-listagem.component';
import { CursosRoutingModule } from './cursos-routing.module';


@NgModule({
  declarations: [
    CursoListagemComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    AppMaterialModule,
    SharedModule  
  ]
})
export class CursosModule { }
