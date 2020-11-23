import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Habilitar formatação de moeda e data em português
import { registerLocaleData } from '@angular/common';
import localePt from "@angular/common/locales/pt";
registerLocaleData(localePt);

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

@NgModule({
  declarations: [
    AppComponent,
    MainToolbarComponent,
    MainMenuComponent,
    MainFooterComponent,
    CursoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // **** ACRESCENTE A LINHA ABAIXO E UMA VÍRGULA NA LINHA DE CIMA *** 
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
