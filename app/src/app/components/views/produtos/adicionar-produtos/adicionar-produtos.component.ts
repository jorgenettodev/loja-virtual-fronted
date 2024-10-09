import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-adicionar-produtos',
  templateUrl: './adicionar-produtos.component.html',
  styleUrl: './adicionar-produtos.component.css'
})
export class AdicionarProdutosComponent {
  public nome!: string;
  public preco!: number;
  public categoria!: number;
  public descricao!: string;
  public url_imagem!: string;

  constructor(private http: HttpClient) {

  }


  public baseUrl: string = "http://localhost:8080/produtos"

  public exibeNome() {
    console.table({
      nome: this.nome,
      preco: this.preco
    })
  }
}
