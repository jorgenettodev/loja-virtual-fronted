import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Produto } from '../../../../models/produto';
import { Observable } from 'rxjs';
import { ProdutoService } from '../../../../services/produto.service';
import { Router } from '@angular/router';

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

  constructor(private http: HttpClient,
              private service: ProdutoService,
              private router: Router) {}

  /* Cria um novo método que:
  *   - Cria um novo produto, pegando os dados lá do user form
  *   - Chama o metodo adicionarProduto e adiciona o produto no backend.
  *     - Faz isso através da service.adicionarProduto(produto)
  */

  public adicionarProduto() {
    const novoProduto = new Produto(this.nome, this.descricao, this.preco, this.url_imagem);
    // test: loga o produto criado
    console.log(novoProduto);
    this.service.adicionarProduto(novoProduto).subscribe(response => {
      console.log(response);
      this.router.navigate(['/']);
    });
  }




  public baseUrl: string = "http://localhost:8080/produtos"



}
