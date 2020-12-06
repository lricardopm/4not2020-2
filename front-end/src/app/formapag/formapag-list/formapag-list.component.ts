import { Component, OnInit } from '@angular/core';
import { FormapagService } from '../formapag.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-formapag-list',
  templateUrl: './formapag-list.component.html',
  styleUrls: ['./formapag-list.component.scss']
})
export class FormapagListComponent implements OnInit {

  // Nome da entidade no plural
  formapags : any = [] 

  // Quais colunas serão exibidas na tabela, e em qual ordem
  displayedColumns: string[] = ['formapagamento', 'observacao', 'editar', 'excluir']

  // Injeção de dependência ou inversão de controle  
  constructor(
      private formapagSrv : FormapagService,
      private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.formapags = await this.formapagSrv.listar()
    console.log(this.formapags)
  }

  async excluir(id: string) {
    if(confirm('Deseja realmente excluir?')) {
        try {
            await this.formapagSrv.excluir(id)
            // 1) Recarregar os dados da tabela
            this.ngOnInit()
            // 2) Dar feedback para o usuário com mensagem
            this.snackBar.open('Item excluído com sucesso.', 'Entendi', {
              duration: 5000 // 5 segundos
            })
        }
        catch(erro) {
            // 3) Dar feedback de erro para o usuário
            this.snackBar.open('ERRO: não foi possível excluir este item.', 'Que pena!', {
              duration: 5000 // 5 segundos
            })
            console.log(erro)
    }
}


}
}
