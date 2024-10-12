import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../../../services/produto.service';
import { Produto } from '../../../../models/produto';

@Component({
  selector: 'app-listagem-produtos',
  templateUrl: './listagem-produtos.component.html',
  styleUrl: './listagem-produtos.component.css'
})
export class ListagemProdutosComponent implements OnInit {
  public produtos!: Produto[];


  constructor(private produtoService: ProdutoService) { }
  ngOnInit(): void {
    this.buscarProdutos();
  }

  public buscarProdutos(){
    this.produtoService.getProdutos().subscribe(response => {
      this.produtos = response;
      console.log(this.produtos);
    })
  }

  public deletar(id: number) {
    return this.produtoService.deletarProduto(id).subscribe(response => {
      console.log(response);
      this.buscarProdutos();
    });
  }
}
