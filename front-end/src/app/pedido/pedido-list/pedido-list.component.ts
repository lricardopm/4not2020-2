import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
  styleUrls: ['./pedido-list.component.scss']
})
export class PedidoListComponent implements OnInit {

  // Nome da entidade no plural
  pedidos : any = [] 

  // Quais colunas serão exibidas na tabela, e em qual ordem
  displayedColumns: string[] = ['datapedido', 'cliente', 'parceiro', 'quantidade', 'valortotal', 'editar', 'excluir']

  // Injeção de dependência ou inversão de controle  
  constructor(
      private pedidoSrv : PedidoService,
      private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.pedidos = await this.pedidoSrv.listar()
    console.log(this.pedidos)
  }

  async excluir(id: string) {
    if(confirm('Deseja realmente excluir?')) {
        try {
            await this.pedidoSrv.excluir(id)
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
