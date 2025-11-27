import { Routes } from '@angular/router';
import { Home } from './navegacao/home/home';
import { Sobre } from './institucional/sobre/sobre';
import { Contato } from './institucional/contato/contato';
import {Produtos} from './institucional/produtos/produtos';
import {Features} from './institucional/features/features';
import { DataBinding } from './demos/data-binding/data-binding';
import { FormsModule } from '@angular/forms';
import { produtoService } from './produtos/produtos.service';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'sobre', component: Sobre },
  { path: 'contato', component: Contato },
  { path: 'produtos', component: Produtos},
  { path: 'features', component: Features},
  { path: 'data-binding', component: DataBinding }
];
