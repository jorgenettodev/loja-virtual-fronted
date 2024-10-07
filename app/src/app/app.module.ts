import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { provideHttpClient } from '@angular/common/http';
import { AdicionarProdutosComponent } from './components/views/produtos/adicionar-produtos/adicionar-produtos.component';
import { ListagemProdutosComponent } from './components/views/produtos/listagem-produtos/listagem-produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdicionarProdutosComponent,
    ListagemProdutosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
