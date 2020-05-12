import { Component, OnInit } from '@angular/core';
import { Produto } from 'model/produto';
import { ProdutosService } from '../service/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class DeletarComponent implements OnInit {

  produto: Produto = new Produto
  delOk: boolean = false

  constructor(private produtoService: ProdutosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id:number = this.route.snapshot.params['id']
    this.findById(id)
  }

  findById(id:number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto)=>{
      this.produto = resp
    }, err => {
      console.log(`Erro: ${err.status}, não conseguimos pegar o id`)
    })
  }

  btnSim(){
    this.produtoService.deleteProduto(this.produto.id).subscribe(()=>{
      this.router.navigate(['/loja'])
    })
  }

  btnNao(){
    this.router.navigate(['/loja'])
  }

}
