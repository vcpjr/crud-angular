import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Observable, delay, tap } from 'rxjs';
import { CursoService } from './../../shared/services/curso.service';
import { Curso } from './../../model/curso';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-curso-listagem',
  templateUrl: './curso-listagem.component.html',
  styleUrls: ['./curso-listagem.component.scss']
})
export class CursoListagemComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'categoria'];
/*   cursos: Curso[] = [
    {id: 1, nome: 'Angular', categoria: 'frontend'},
    {id: 2, nome: 'Java', categoria: 'backend'},
    {id: 3, nome: 'Caché', categoria: 'hell'}
  ]; */
  cursos: Curso[] = [];
  buscando: boolean = false;

  constructor(private cursoService: CursoService,
              private dialog: MatDialog) {
    this.buscarCursos();
  }

  private buscarCursos(){
    this.buscando = true;
    
    this.cursoService.listarTodos().subscribe(
      resultado => {
        this.cursos = resultado;
        this.buscando = false;
      },
      erro => {
        //console.log("DEU ERRO. Causa: " + erro);
        this.onError("Erro ao buscar cursos")
        this.buscando = false;
      }
    );
  }

  onError(mensagem: String){
    this.dialog.open(ErrorDialogComponent, {
      data: mensagem
    });
  }
  
  ngOnInit(): void {
  }
}
