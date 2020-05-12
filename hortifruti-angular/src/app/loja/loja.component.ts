import { Component, OnInit } from '@angular/core';
import { Produto } from 'model/produto';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  key = 'data';
  reverse = true;

  listaProdutos: Produto[];

  produto: Produto = new Produto()

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.findAllProduto();
  }

  findAllProduto() {
    this.produtosService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
  }

  findById(id: number) {
    this.produtosService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp
    }, err => {
      console.log('Não preciso do Id');
    })
  }

  cadastrar() {
    this.produtosService.postProduto(this.produto).subscribe((resp:
      Produto) => {
      this.produto = resp
      location.assign('/loja')
    })
  }

}
