import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoListComponent } from './curso/curso-list/curso-list.component';
import { CursoFormComponent } from './curso/curso-form/curso-form.component';
import { TurmaListComponent } from './turma/turma-list/turma-list.component';
import { TurmaFormComponent } from './turma/turma-form/turma-form.component';

const routes: Routes = [
    // Nomes de rota no Angular (path) NÃO começam com uma barra
    { path: 'curso', component: CursoListComponent },
    { path: 'curso/novo', component: CursoFormComponent },
    { path: 'curso/:id', component: CursoFormComponent },
    
    { path: 'turma', component: TurmaListComponent  },
    { path: 'turma/novo', component: TurmaFormComponent },
    { path: 'turma/:id', component: TurmaFormComponent }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
