import { Component, OnInit } from '@angular/core';
import { ParceiroService } from '../parceiro.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-parceiro-list',
  templateUrl: './parceiro-list.component.html',
  styleUrls: ['./parceiro-list.component.scss']
})
export class ParceiroListComponent implements OnInit {

  // Nome da entidade no plural
  parceiros : any = [] 

  // Quais colunas serão exibidas na tabela, e em qual ordem
  displayedColumns: string[] = ['nome', 'endereco', 'telefone', "categoria", 'editar', 'excluir']

  // Injeção de dependência ou inversão de controle  
  constructor(
      private parceiroSrv : ParceiroService,
      private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.parceiros = await this.parceiroSrv.listar()
    console.log(this.parceiros)
  }

  async excluir(id: string) {
    if(confirm('Deseja realmente excluir?')) {
        try {
            await this.parceiroSrv.excluir(id)
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
