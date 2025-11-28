import { Component } from '@angular/core';
import { CurrencyPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Produto } from '../produto';

@Component({
  selector: 'app-lista-produto',
  standalone: true,
  imports: [CurrencyPipe, NgFor, NgIf, NgClass],
  templateUrl: './lista-produto.html',
})
export class ListaProduto {
  public produtos: Produto[] = [
    {
      id: 1,
      nome: 'Notebook Gamer',
      valor: 5999.9,
      promocao: true,
      valorPromo: 4999.9,
      imagem: 'https://via.placeholder.com/400x250?text=Notebook+Gamer',
    },
    {
      id: 2,
      nome: 'Mouse Sem Fio',
      valor: 199.9,
      promocao: false,
      valorPromo: 0,
      imagem: 'https://via.placeholder.com/400x250?text=Mouse+Sem+Fio',
    },
    {
      id: 3,
      nome: 'Teclado Mecânico',
      valor: 399.9,
      promocao: false,
      valorPromo: 0,
      imagem: 'https://via.placeholder.com/400x250?text=Teclado+Mecanico',
    },
  ];

  public possuiPromocao(produto: Produto): boolean {
    return produto.promocao && !!produto.valorPromo && produto.valorPromo < produto.valor;
  }

  public valorExibicao(produto: Produto): number {
    return this.possuiPromocao(produto) ? produto.valorPromo : produto.valor;
  }
}

