import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoListagemComponent } from './curso-listagem/curso-listagem.component';

const routes: Routes = [
  { path: '', component: CursoListagemComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
