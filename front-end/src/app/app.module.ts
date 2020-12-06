import { NgxMaskModule, IConfig } from 'ngx-mask'

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Habilitar formatação de moeda e data em português
import { registerLocaleData } from '@angular/common';
import localePt from "@angular/common/locales/pt";
registerLocaleData(localePt);

// No app.module.ts
import { MatMomentDateModule, MAT_MOMENT_DATE_FORMATS, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// **** Acrescente a Linha Abaixo ***
import { MaterialModule } from './material/material.module';
import { MainToolbarComponent } from './ui/main-toolbar/main-toolbar.component';
import { MainMenuComponent } from './ui/main-menu/main-menu.component';
import { MainFooterComponent } from './ui/main-footer/main-footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CursoListComponent } from './curso/curso-list/curso-list.component';
import { CursoFormComponent } from './curso/curso-form/curso-form.component';
import { FormsModule } from '@angular/forms';
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
import { PedidoListComponent } from './pedido/pedido-list/pedido-list.component';
import { PedidoFormComponent } from './pedido/pedido-form/pedido-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainToolbarComponent,
    MainMenuComponent,
    MainFooterComponent,
    CursoListComponent,
    CursoFormComponent,
    TurmaListComponent,
    TurmaFormComponent,
    FormapagListComponent,
    FormapagFormComponent,
    ParceiroListComponent,
    ParceiroFormComponent,
    ClienteListComponent,
    ClienteFormComponent,
    ProdutoListComponent,
    ProdutoFormComponent,
    PedidoListComponent,
    PedidoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // **** ACRESCENTE A LINHA ABAIXO E UMA VÍRGULA NA LINHA DE CIMA *** 
    MaterialModule,
    HttpClientModule,
    FormsModule,
    MatMomentDateModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
// No app.module.ts, dentro seção providers
/**** Datas em português no MatDatepicker  ****/
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}}
/**********************************************/    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
