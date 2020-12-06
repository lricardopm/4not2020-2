import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {

  // Nome da entidade no plural
  clientes : any = [] 

  // Quais colunas serão exibidas na tabela, e em qual ordem
  displayedColumns: string[] = ['nome', 'endent', 'telefone', "cidade", 'editar', 'excluir']

  // Injeção de dependência ou inversão de controle  
  constructor(
      private clienteSrv : ClienteService,
      private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.clientes = await this.clienteSrv.listar()
    console.log(this.clientes)
  }

  async excluir(id: string) {
    if(confirm('Deseja realmente excluir?')) {
        try {
            await this.clienteSrv.excluir(id)
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
