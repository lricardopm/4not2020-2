import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PedidoService } from '../pedido.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from 'src/app/curso/curso.service';
import { ProfessorService } from 'src/app/professor/professor.service';
import { SalaAulaService } from 'src/app/sala-aula/sala-aula.service';
// a partir daqui é o meu projeto //
import { ParceiroService } from 'src/app/parceiro/parceiro.service';
import { ClienteService } from 'src/app/cliente/cliente.service';
import { ProdutoService } from 'src/app/produto/produto.service';
import { FormapagService } from 'src/app/formapag/formapag.service';


@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.scss']
})
export class PedidoFormComponent implements OnInit {

  // Variável para armazenar os dados do registro
  pedido : any = {}  // Objeto vazio, nome no SINGULAR

  title : string = 'Nova pedido'

  // Variáveis para armazenar as listagens de objetos relacionados
  cursos : any = []   // Vetor vazio, nome no PLURAL
  professores : any = []
  salasAula : any = []
  parceiros : any = []
  produtos : any = []
  clientes : any = []
  formapags : any = []

  // Dias da semana
  diasSemana : any = [
    { val: 'dom', descr: 'Domingo' },
    { val: 'seg', descr: 'Segunda-feira' },
    { val: 'ter', descr: 'Terça-feira' },
    { val: 'qua', descr: 'Quarta-feira' },
    { val: 'qui', descr: 'Quinta-feira' },
    { val: 'sex', descr: 'Sexta-feira' },
    { val: 'sáb', descr: 'Sábado' },
  ]

  constructor(
    private pedidoSrv : PedidoService,
    // Services das entidades relacionadas
    private cursoSrv : CursoService,
    private professorSrv : ProfessorService,
    private salaAulaSrv : SalaAulaService,
    // meu projeto
    private parceiroSrv : ParceiroService,
    private produtoSrv : ProdutoService,
    private clienteSrv : ClienteService,
    private formapagSrv : FormapagService,

    private snackBar : MatSnackBar,
    private location : Location,
    private actRoute : ActivatedRoute
  ) { }

  async ngOnInit() {
    // Verifica se existe o parâmetro id na URL (rota)
    if(this.actRoute.snapshot.params['id']) {
      try {
        // 1) Acionar o back-end para buscar esse registro
        // e disponibilizá-lo para edição        
        this.pedido = await this.pedidoSrv.obterUm(this.actRoute.snapshot.params['id'])
        // 2) Mudar o título da página
        this.title = 'Editando pedido'
      }
      catch(erro) {
        console.log(erro)
        this.snackBar.open('ERRO: não foi possível carregar dados para edição.',
          'Que pena!', { duration: 5000 })
      }
    }
    // Carrega as listagens das entidades relacionadas
    this.carregarDados()
  }

  async carregarDados() {
    try {
      this.cursos = await this.cursoSrv.listar()
      this.professores = await this.professorSrv.listar()
      this.salasAula = await this.salaAulaSrv.listar()
      this.parceiros = await this.parceiroSrv.listar()
      this.clientes = await this.clienteSrv.listar()
      this.produtos = await this.produtoSrv.listar()
      this.formapags = await this.formapagSrv.listar()
    }
    catch(erro) {
      console.log(erro)
      this.snackBar.open(`ERRO: não foi possível carregar todos os dados 
        necessários para a página.`, 'Que pena', { duration: 5000 })
    }
  }

  async salvar(form: NgForm) {
    //console.log(this.pedido)
    //return
    if(form.valid) {
      try {
        // 1) Salvar os dados no back-end
        // Se o pedido já existir (caso de edição), ele já terá
        // o atributo _id
        if(this.pedido._id) {
          await this.pedidoSrv.atualizar(this.pedido) // Atualização
        }
        else {
          await this.pedidoSrv.novo(this.pedido)
        }
        // 2) Dar o feedback para o usuário
        this.snackBar.open('Dados salvos com sucesso.', 'Entendi',
          { duration: 5000 })
        // 3) Voltar ao componente de listagem
        this.location.back()
      }
      catch (erro) {
        console.log(erro)
        this.snackBar.open('ERRO: não foi possível salvar os dados.', 'Que pena!',
          { duration: 5000 })
      }
      
    }
  }

  voltar(form: NgForm) {
    let result = true
    // form.dirty = formulário "sujo", não salvo (via código)
    // form.touched = o conteúdo de algum campo foi alterado (via usuário)
    if(form.dirty && form.touched) {
      result = confirm('Há dados não salvos. Deseja realmente voltar?')
    }

    if(result) this.location.back()

  }

}