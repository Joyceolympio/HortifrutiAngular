import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../service/produtos.service';
import { Produto } from 'model/produto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  produto: Produto = new Produto

  constructor(private produtoServie: ProdutosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    this.findById(id)
  }

  findById(id: number) {
    this.produtoServie.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp
    })
  }

  salvar() {
    this.produtoServie.putProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp
      this.router.navigate(['/loja'])
      location.assign('/loja')
    })
  }


}
