import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoListComponent } from './curso/curso-list/curso-list.component';
import { CursoFormComponent } from './curso/curso-form/curso-form.component';
import { TurmaListComponent } from './turma/turma-list/turma-list.component';
import { TurmaFormComponent } from './turma/turma-form/turma-form.component';

import { FormapagListComponent } from './formapag/formapag-list/formapag-list.component';
import { FormapagFormComponent } from './formapag/formapag-form/formapag-form.component';

import { ParceiroListComponent } from './parceiro/parceiro-list/parceiro-list.component';
import { ParceiroFormComponent } from './parceiro/parceiro-form/parceiro-form.component';

import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';

import { ProdutoListComponent } from './produto/produto-list/produto-list.component';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';

const routes: Routes = [
    // Nomes de rota no Angular (path) NÃO começam com uma barra
    { path: 'curso', component: CursoListComponent },
    { path: 'curso/novo', component: CursoFormComponent },
    { path: 'curso/:id', component: CursoFormComponent },
    
    { path: 'turma', component: TurmaListComponent  },
    { path: 'turma/novo', component: TurmaFormComponent },
    { path: 'turma/:id', component: TurmaFormComponent },

    { path: 'formapag', component: FormapagListComponent  },
    { path: 'formapag/novo', component: FormapagFormComponent },
    { path: 'formapag/:id', component: FormapagFormComponent },

    { path: 'parceiro', component: ParceiroListComponent  },    
    { path: 'parceiro/novo', component: ParceiroFormComponent },
    { path: 'parceiro/:id', component: ParceiroFormComponent },

    { path: 'cliente', component: ClienteListComponent  },    
    { path: 'cliente/novo', component: ClienteFormComponent },
    { path: 'cliente/:id', component: ClienteFormComponent },

    { path: 'produto', component: ProdutoListComponent  },    
    { path: 'produto/novo', component: ProdutoFormComponent },
    { path: 'produto/:id', component: ProdutoFormComponent }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
